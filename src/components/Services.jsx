import serviceFace from '../assets/service-face.png';
import serviceBody from '../assets/service-body.png';
import serviceSpa from '../assets/service-spa.png';
import useScrollObserver from '../hooks/useScrollObserver';

const services = [
    {
        title: "Tratamente Faciale",
        desc: "Revitalizează-ți tenul cu ritualurile noastre signature anti-aging și de hidratare profundă.",
        image: serviceFace
    },
    {
        title: "Ritualuri Corporale",
        desc: "Masaje de relaxare și scrub-uri corporale concepute pentru a-ți reda echilibrul.",
        image: serviceBody
    },
    {
        title: "Experiență Spa",
        desc: "Lasă-te purtată de simțuri în suita noastră termală și zona de relaxare.",
        image: serviceSpa
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
