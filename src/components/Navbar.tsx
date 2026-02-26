import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const services = [
  { label: 'Paint Protection Film', href: '/ppf-brisbane' },
  { label: 'Ceramic Coating', href: '/ceramic-coating-brisbane' },
  { label: 'Automotive Window Tinting', href: '/automotive-window-tinting-brisbane' },
  { label: 'Residential Window Tinting', href: '/residential-window-tinting-brisbane' },
  { label: 'Commercial Window Tinting', href: '/commercial-window-tinting-brisbane' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      mobileMenuRef.current.style.display = 'flex';
      const links = mobileLinksRef.current?.querySelectorAll('a, button');
      if (links) {
        gsap.fromTo(links, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out' });
      }
    } else {
      mobileMenuRef.current.style.display = 'none';
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          width: 'fit-content',
          maxWidth: '900px',
          padding: '12px 20px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          background: scrolled ? 'rgba(255, 255, 255, 0.80)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          border: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 380ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '20px',
            letterSpacing: '0.05em',
            color: 'var(--color-text-primary)',
            whiteSpace: 'nowrap',
          }}
          aria-label="NextLvl Protection — Home"
        >
          NEXTLVL<span style={{ color: 'var(--color-accent)' }}> PROTECTION</span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4,
                color: 'var(--color-text-secondary)', fontSize: 14, fontFamily: 'var(--font-body)',
                fontWeight: 500, transition: 'color 180ms ease',
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
            >
              Services <ChevronDown size={14} style={{ transition: 'transform 200ms', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </button>
            {dropdownOpen && (
              <div
                role="menu"
                style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.82)', border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(24px) saturate(180%)', WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  borderRadius: 16, padding: '8px 0', minWidth: 260,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10), 0 1px 0 rgba(255,255,255,0.9) inset',
                }}
              >
                {services.map(s => (
                  <Link
                    key={s.href}
                    to={s.href}
                    role="menuitem"
                    style={{
                      display: 'block', padding: '10px 20px',
                      color: 'var(--color-text-secondary)', fontSize: 14,
                      transition: 'color 150ms ease, background 150ms ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,31,46,0.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'Gallery', href: '/gallery' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/get-a-quote' },
          ].map(link => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                color: location.pathname === link.href ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                fontSize: 14, fontWeight: 500,
                textDecoration: location.pathname === link.href ? 'underline' : 'none',
                textUnderlineOffset: 4, transition: 'color 180ms ease',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/get-a-quote" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14, borderRadius: 4 }}>
            <span className="btn-slide" />
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', display: 'none' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        ref={mobileMenuRef}
        style={{
          display: 'none', position: 'fixed', inset: 0,
          background: 'var(--color-bg-primary)', zIndex: 190,
          flexDirection: 'column', padding: '100px 32px 32px',
        }}
      >
        <div ref={mobileLinksRef} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 8 }}>Services</p>
          {services.map(s => (
            <Link key={s.href} to={s.href} style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontFamily: 'Bebas Neue, sans-serif', color: 'var(--color-text-secondary)', letterSpacing: '0.02em' }}>
              {s.label}
            </Link>
          ))}
          <div style={{ height: 1, background: 'var(--color-border)', margin: '16px 0' }} />
          {[{ label: 'Gallery', href: '/gallery' }, { label: 'About', href: '/about' }].map(l => (
            <Link key={l.href} to={l.href} style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontFamily: 'Bebas Neue, sans-serif', color: 'var(--color-text-secondary)', letterSpacing: '0.02em' }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="btn-slide" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-sticky-bar" role="navigation" aria-label="Mobile quick actions">
        <a href="tel:0411164886" aria-label="Call NextLvl Protection">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call
        </a>
        <Link to="/get-a-quote" aria-label="Get a quote">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Quote
        </Link>
        <a href="https://maps.google.com/?q=Unit+16,+18-24+Loam+St,+Acacia+Ridge+QLD+4110" target="_blank" rel="noopener noreferrer" aria-label="Get directions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Directions
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
