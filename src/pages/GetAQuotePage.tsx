import QuoteForm from '../components/QuoteForm';
import PageMeta from '../components/PageMeta';

export default function GetAQuotePage() {
  return (
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh', paddingTop: 100, paddingBottom: 80 }}>
      <PageMeta
        title="Get a Quote — NextLvl Protection Brisbane"
        description="Request a quote for PPF, ceramic coating or window tinting in Brisbane. NextLvl Protection, Acacia Ridge. Usually replied within one business day."
        canonical="https://www.nextlvlprotection.com.au/get-a-quote"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Get a Quote — NextLvl Protection",
        "url": "https://www.nextlvlprotection.com.au/get-a-quote",
        "description": "Request a quote for paint protection film, ceramic coating or window tinting in Brisbane.",
      })}} />
      <section style={{ padding: '40px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--color-accent)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>NextLvl Protection — Brisbane</p>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 20 }}>Get a Quote</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 0' }}>
          Tell us about your vehicle or property and we'll come back to you with a detailed quote. Usually within one business day.
        </p>
      </section>
      <section style={{ padding: '0 var(--section-padding-x)', maxWidth: 600, margin: '0 auto' }}>
        <div className="card" style={{ padding: '40px 36px' }}>
          <QuoteForm />
        </div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="card" style={{ padding: '20px 18px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginBottom: 6 }}>Prefer to call?</p>
            <a href="tel:0411164886" style={{ color: 'var(--color-accent)', fontSize: 15, fontWeight: 600 }}>0411 164 886</a>
          </div>
          <div className="card" style={{ padding: '20px 18px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginBottom: 6 }}>Email us</p>
            <a href="mailto:halo@nextlvlprotection.com.au" style={{ color: 'var(--color-accent)', fontSize: 14, fontWeight: 500 }}>halo@nextlvlprotection.com.au</a>
          </div>
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--color-text-secondary)' }}>Studio:</strong> Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110<br />
            <strong style={{ color: 'var(--color-text-secondary)' }}>Hours:</strong> Mon–Fri 9:00am – 5:30pm
          </p>
        </div>
      </section>
    </main>
  );
}
