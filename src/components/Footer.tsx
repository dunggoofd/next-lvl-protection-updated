import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoNXTZEN from '../assets/NXTZEN.png';
import logoSunTek from '../assets/suntek-automotive-window-film-seeklogo.png';
import logo3M from '../assets/3M.png';
import logoSolarGard from '../assets/solar-gard-seeklogo.png';

const quickLinks = [
  { label: 'Paint Protection Film', href: '/ppf-brisbane' },
  { label: 'Ceramic Coating', href: '/ceramic-coating-brisbane' },
  { label: 'Automotive Window Tinting', href: '/automotive-window-tinting-brisbane' },
  { label: 'Residential Window Tinting', href: '/residential-window-tinting-brisbane' },
  { label: 'Commercial Window Tinting', href: '/commercial-window-tinting-brisbane' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

const popularLinks = [
  { label: 'SunTek PPF', href: '/suntek-ppf-brisbane' },
  { label: 'Ceramic Coating Questions', href: '/ceramic-coating-questions' },
  { label: 'PPF Questions', href: '/ppf-questions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="footer-carbon" style={{
      background: 'linear-gradient(180deg, #141416 0%, #0a0a0a 50%, #000000 100%)',
      margin: 0,
      paddingTop: 'clamp(60px, 8vw, 80px)',
      paddingBottom: 0,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/360_F_335323173_x4DsXcW70YtXjuo6fL8hxnmzfQi2WBdJ.jpg)', backgroundSize: '120% 120%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 1, pointerEvents: 'none' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />
      <div className="footer-carbon-content" style={{ padding: '0 var(--section-padding-x)', position: 'relative', zIndex: 1, maxWidth: '100%', width: '100%' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr', gap: 48, paddingBottom: 56 }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.05em', color: '#fff', marginBottom: 12 }}>
              NEXT LVL<span style={{ color: '#C8CDD5' }}> PROTECTION</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
              #1 Certified Paint &amp; Glass Protection in Brisbane.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <img src={logoNXTZEN} alt="NXTZEN" style={{ height: 28, width: 'auto', opacity: 0.85 }} />
                <img src={logo3M} alt="3M" style={{ height: 28, width: 'auto', opacity: 0.85 }} />
                <img src={logoSolarGard} alt="Solar Gard" style={{ height: 28, width: 'auto', opacity: 0.85 }} />
              </div>
              <div>
                <img src={logoSunTek} alt="SunTek" style={{ height: 28, width: 'auto', opacity: 0.85 }} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: '#C8CDD5', marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 150ms ease' }} className="footer-link-dark">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: '#C8CDD5', marginBottom: 20 }}>Popular</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {popularLinks.map(l => (
                <li key={l.href}>
                  <Link to={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 150ms ease' }} className="footer-link-dark">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: '0.04em', color: '#C8CDD5', marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="tel:0468810666" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 150ms ease' }} className="footer-link-dark">
                <Phone size={16} color="var(--color-accent)" strokeWidth={1.5} />
                0468 810 666
              </a>
              <a href="mailto:halo@nextlvlprotection.com.au" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 150ms ease' }} className="footer-link-dark footer-email-link">
                <Mail size={16} color="var(--color-accent)" strokeWidth={1.5} />
                halo@nextlvlprotection.com.au
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>
                <MapPin size={16} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3 }} />
                <span>Unit 16, 18-24 Loam St,<br />Acacia Ridge QLD 4110</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <div style={{ padding: '24px 0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, margin: 0 }}>
            Copyright © {new Date().getFullYear()} Next LVL Protection Pty Ltd
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://www.instagram.com/nextlvlprotection" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 150ms ease' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/nextlvlprotection" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 150ms ease' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
