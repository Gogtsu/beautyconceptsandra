import useScrollObserver from '../hooks/useScrollObserver';

const reviews = [
    {
        name: "Ana M.",
        text: "O experiență absolut divină. Profesionalismul și atenția la detalii sunt la alt nivel. M-am simțit ca o regină.",
        rating: 5
    },
    {
        name: "Elena Popescu",
        text: "Cel mai bun tratament facial pe care l-am avut vreodată. Pielea mea strălucește! Recomand cu tot dragul.",
        rating: 5
    },
    {
        name: "Maria Ionescu",
        text: "Atmosfera este incredibil de relaxantă. Un adevărat sanctuar în mijlocul orașului. Produsele folosite sunt de top.",
        rating: 5
    }
];

export default function Testimonials() {
    const [ref, isVisible] = useScrollObserver();

    return (
        <section
            ref={ref}
            style={{
                padding: 'var(--spacing-xl) 0',
                backgroundColor: '#1a1a1a',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-secondary)' }}>
                    Ce spun clientele noastre
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((r, i) => (
                        <div key={i} style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{ color: '#FFD700', marginBottom: '1rem', fontSize: '1.2rem' }}>
                                {"★".repeat(r.rating)}
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                fontStyle: 'italic',
                                marginBottom: '1.5rem',
                                color: 'var(--color-text-light)',
                                lineHeight: '1.6'
                            }}>
                                "{r.text}"
                            </p>
                            <h4 style={{
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: 'var(--color-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {r.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
