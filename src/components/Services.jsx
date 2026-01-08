import placeholderImg from '../assets/services1.jpg';
import placeholderImg2 from '../assets/services4.jpg';
import placeholderImg3 from '../assets/services3.jpg';
import placeholderImg4 from '../assets/services2.jpg';
import useScrollObserver from '../hooks/useScrollObserver';

const services = [
    {
        title: "Unghii",
        desc: "Manichiură și pedichiură impecabilă, realizată cu produse premium.",
        image: placeholderImg
    },
    {
        title: "Hair Color",
        desc: "Tehnici moderne de colorare pentru un look vibrant și sănătos.",
        image: placeholderImg2
    },
    {
        title: "Extensii",
        desc: "Volum și lungime naturală pentru părul tău, aplicate cu grijă.",
        image: placeholderImg3
    },
    {
        title: "Tunsoare",
        desc: "Styling personalizat care îți pune în valoare trăsăturile.",
        image: placeholderImg4
    }
];

export default function Services() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section id="services" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-primary)' }}>
            <div className="container" ref={ref}>
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-white)' }}>
                    Tratamentele Noastre
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((s, index) => (
                        <div
                            key={index}
                            className="service-card"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                                transition: `all 0.6s ease-out ${index * 0.2}s`
                            }}
                        >
                            <div style={{ height: '300px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img src={s.image} alt={s.title} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>{s.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
