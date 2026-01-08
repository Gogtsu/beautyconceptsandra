import useScrollObserver from '../hooks/useScrollObserver';

export default function WhyChoose() {
    const [ref, isVisible] = useScrollObserver();

    const reasons = [
        { title: "Produse Premium", text: "Parteneriate exclusive cu branduri de top în estetică." },
        { title: "Expertiză", text: "Specialiști certificați cu ani de experiență în domeniu." },
        { title: "Atmosferă Privată", text: "Un spațiu dedicat intimității și confortului tău." }
    ];

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: '#181818' }}>
            <div className="container">
                <div
                    ref={ref}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '4rem',
                        textAlign: 'center'
                    }}
                >
                    {reasons.map((r, i) => (
                        <div
                            key={i}
                            style={{
                                maxWidth: '300px',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.5s ease-out ${i * 0.2}s`
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '1px',
                                backgroundColor: 'var(--color-secondary)',
                                margin: '0 auto 1.5rem auto'
                            }}></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-white)' }}>{r.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)' }}>{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
