import useScrollObserver from '../hooks/useScrollObserver';

export default function About() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section id="about" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-dark)' }}>
            <div className="container">
                <div
                    ref={ref}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out'
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
                        Conceptul Nostru
                    </h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                        La Beauty Concept, credem că adevărata frumusețe se aliniază cu liniștea interioară.
                        Salonul nostru este conceput ca un sanctuar minimalist, unde fiecare detaliu este gândit
                        pentru a-ți oferi un moment de pauză în viața ta agitată.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>
                        Îmbinăm expertiza estetică avansată cu o abordare holistică a relaxării.
                    </p>
                </div>
            </div>
        </section>
    );
}
