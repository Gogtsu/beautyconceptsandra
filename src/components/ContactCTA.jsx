import useScrollObserver from '../hooks/useScrollObserver';

export default function ContactCTA() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section id="contact" style={{
            padding: 'var(--spacing-xl) 0',
            backgroundColor: 'var(--color-bg-dark)',
            color: 'var(--color-text-light)'
        }}>
            <div
                className="container"
                ref={ref}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}
            >
                {/* Contact Info */}
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                        Rezervă-ți momentul
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px' }}>
                        Te așteptăm într-un cadru intim și relaxant pentru a-ți oferi cea mai bună versiune a ta.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-secondary)' }}>📍</span> Olimpului 59, București
                        </p>
                        <p style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-secondary)' }}>📞</span>
                            <a href="tel:0745288052" style={{ color: 'inherit', textDecoration: 'none' }}>0745 288 052</a>
                        </p>
                        <a
                            href="https://mero.ro/p/beauty-concept-by-sandra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-block', textDecoration: 'none' }}
                        >
                            Programează-te Online
                        </a>
                    </div>
                </div>

                {/* Map */}
                <div style={{
                    height: '400px',
                    width: '100%',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Olimpului%2059,%20Bucharest+(Beauty%20Concept)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        style={{ filter: 'grayscale(100%) invert(90%)' }}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
