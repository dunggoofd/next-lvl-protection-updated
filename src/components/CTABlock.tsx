import QuoteForm from './QuoteForm';

interface CTABlockProps {
  service: string;
  defaultService?: string;
}

export default function CTABlock({ service, defaultService }: CTABlockProps) {
  return (
    <section
      className="section noise-overlay radial-glow"
      style={{ background: 'var(--color-bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>
              Get Started
            </p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 16, lineHeight: 1.05 }}>
              Book Your {service}<br />in Brisbane.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 32, fontSize: 16 }}>
              No obligation. We'll get back to you within 2 business hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Prefer to talk?</span>
              <a
                href="tel:0411164886"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-accent)', letterSpacing: '0.04em', lineHeight: 1 }}
              >
                0411 164 886
              </a>
              <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Mon–Fri 9am–5:30pm</span>
            </div>
          </div>

          <div className="card" style={{ padding: 36 }}>
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
