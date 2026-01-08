import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import useScrollObserver from '../hooks/useScrollObserver';

export default function Gallery() {
    const images = [img1, img2, img3, img4];
    const [ref, isVisible] = useScrollObserver();

    return (
        <section id="gallery" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-primary)' }}>
            <div className="container" ref={ref}>
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>Jurnal Vizual</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem'
                }}>
                    {images.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                height: '300px',
                                overflow: 'hidden',
                                borderRadius: '4px',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                                transition: `all 0.6s ease-out ${i * 0.15}s`
                            }}
                        >
                            <img src={img} alt="Gallery" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease, transform 0.5s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
