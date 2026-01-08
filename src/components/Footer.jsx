export default function Footer() {
    return (
        <footer style={{
            padding: 'var(--spacing-lg) 0',
            backgroundColor: '#000',
            borderTop: '1px solid #222',
            color: 'var(--color-text-light)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Beauty Concept</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Frumusețe rafinată pentru femeia modernă.</p>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>București, România</p>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>&copy; {new Date().getFullYear()} Beauty Concept. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
}
