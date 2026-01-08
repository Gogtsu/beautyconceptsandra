import useScrollObserver from '../hooks/useScrollObserver';

export default function ContactCTA() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section id="contact" style={{
            padding: 'var(--spacing-xl) 0',
            backgroundColor: 'var(--color-bg-dark)',
            textAlign: 'center'
        }}>
            <div
                className="container"
                ref={ref}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                    transition: 'all 0.8s ease-out'
                }}
            >
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                    Rezervă-ți momentul de frumusețe
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '3rem',
                    color: 'var(--color-text-light)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto'
                }}>
                    Gata să simți diferența? Programează o consultație astăzi.
                </p>
                <button className="btn btn-primary">Programează-te</button>
            </div>
        </section>
    );
}
