import { Link } from 'react-router-dom';

const services = [
  { label: 'Paint Protection Film', href: '/ppf-brisbane' },
  { label: 'Ceramic Coating', href: '/ceramic-coating-brisbane' },
  { label: 'Automotive Window Tinting', href: '/automotive-window-tinting-brisbane' },
  { label: 'Residential Window Tinting', href: '/residential-window-tinting-brisbane' },
  { label: 'Commercial Window Tinting', href: '/commercial-window-tinting-brisbane' },
];

const aeoHubs = [
  { label: 'PPF Questions', href: '/ppf-questions' },
  { label: 'Ceramic Coating Questions', href: '/ceramic-coating-questions' },
  { label: 'Auto Tinting Questions', href: '/automotive-tinting-questions' },
  { label: 'Residential Tinting Questions', href: '/residential-tinting-questions' },
  { label: 'Commercial Tinting Questions', href: '/commercial-tinting-questions' },
];

const serviceAreas = [
  'Acacia Ridge', 'Sunnybank', 'Eight Mile Plains', 'Moorooka', 'Salisbury',
  'Rocklea', 'Coopers Plains', 'Archerfield', 'Runcorn', 'Calamvale',
  'Algester', 'Parkinson', 'Oxley', 'Forest Lake', 'Richlands',
  'Inala', 'Browns Plains', 'Sunnybank Hills', 'Macgregor', 'Nathan',
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="container" style={{ padding: '0 var(--section-padding-x)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, paddingBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, letterSpacing: '0.05em', marginBottom: 16 }}>
              NEXTLVL<span style={{ color: 'var(--color-accent)' }}> PROTECTION</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Brisbane's certified premium film installation specialist.<br />
              SunTek PPF · Solar Gard VTX PRO · 3M Window Films
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              <a href="tel:0411164886" style={{ color: 'var(--color-text-secondary)', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}>
                0411 164 886
              </a>
              <a href="mailto:halo@nextlvlprotection.com.au" style={{ color: 'var(--color-text-secondary)', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}>
                halo@nextlvlprotection.com.au
              </a>
              <span style={{ color: 'var(--color-text-muted)' }}>Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110</span>
              <span style={{ color: 'var(--color-text-muted)' }}>Mon–Fri 9am–5:30pm · Sat–Sun Closed</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(s => (
                <li key={s.href}>
                  <Link to={s.href} style={{ color: 'var(--color-text-secondary)', fontSize: 14, transition: 'color 150ms' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Hub */}
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Knowledge Hub</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {aeoHubs.map(h => (
                <li key={h.href}>
                  <Link to={h.href} style={{ color: 'var(--color-text-secondary)', fontSize: 14, transition: 'color 150ms' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}>
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Service Areas</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.9 }}>
              {serviceAreas.join(' · ')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--color-border)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>
            © {new Date().getFullYear()} NextLvl Protection Pty Ltd. All rights reserved. Acacia Ridge, Brisbane QLD.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/gallery" style={{ color: 'var(--color-text-muted)', fontSize: 13, transition: 'color 150ms' }}>Gallery</Link>
            <Link to="/about" style={{ color: 'var(--color-text-muted)', fontSize: 13, transition: 'color 150ms' }}>About</Link>
            <Link to="/get-a-quote" style={{ color: 'var(--color-text-muted)', fontSize: 13, transition: 'color 150ms' }}>Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
