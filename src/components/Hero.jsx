import heroBg from '../assets/hero-bg.png';
import useScrollObserver from '../hooks/useScrollObserver';

export default function Hero() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <img
                    src={heroBg}
                    alt="Luxury Salon Atmosphere"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                }}></div>
            </div>

            <div
                ref={ref}
                className="container text-center"
                style={{
                    maxWidth: '800px',
                    padding: '0 20px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1s ease-out'
                }}
            >
                <p style={{
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-secondary)'
                }}>
                    Est. 2024 • București
                </p>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    marginBottom: '1.5rem',
                    color: 'var(--color-white)'
                }}>
                    Frumusețea, rafinată ca un <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>concept</span>.
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    marginBottom: '3rem',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 300
                }}>
                    Descoperă un sanctuar al calmului și încrederii. Tratamente premium create pentru a-ți dezvălui strălucirea naturală.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary">Programează-te</button>
                    <button className="btn btn-outline" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Vezi Servicii</button>
                </div>
            </div>
        </section>
    );
}
