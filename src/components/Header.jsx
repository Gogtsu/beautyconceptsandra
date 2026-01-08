import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoHeight = scrolled || mobileOpen ? '60px' : '118px';

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '0.5rem 2rem' : '1rem 2rem',
                transition: 'all 0.4s ease',
                backgroundColor: scrolled || mobileOpen ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
                        <img
                            src={logo}
                            alt="Beauty Concept"
                            style={{
                                height: logoHeight,
                                transition: 'height 0.4s ease',
                                filter: 'brightness(0) invert(1)'
                            }}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <ul style={{ display: 'flex', gap: '2rem' }}>
                            {['Despre', 'Servicii', 'Galerie', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace('despre', 'about').replace('servicii', 'services').replace('galerie', 'gallery')}`} style={{
                                        textTransform: 'uppercase',
                                        fontSize: '0.8rem',
                                        letterSpacing: '2px',
                                        fontWeight: 500
                                    }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 1001,
                            padding: '10px'
                        }}
                    >
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'white',
                            marginBottom: '6px',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                        }}></div>
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'white',
                            marginBottom: '6px',
                            opacity: mobileOpen ? 0 : 1,
                            transition: 'opacity 0.3s ease'
                        }}></div>
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'white',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                        }}></div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#000',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.4s ease-in-out',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
                opacity: mobileOpen ? 1 : 0
            }}>
                <ul style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {['Despre', 'Servicii', 'Galerie', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace('despre', 'about').replace('servicii', 'services').replace('galerie', 'gallery')}`}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    textTransform: 'uppercase',
                                    fontSize: '1.5rem',
                                    letterSpacing: '3px',
                                    fontWeight: 300,
                                    color: 'white'
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
