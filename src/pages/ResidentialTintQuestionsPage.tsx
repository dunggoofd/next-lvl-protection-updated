import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';

const faqs = [
  { q: 'What is residential window tinting?', a: 'Residential window tinting is the application of a professional window film (such as 3M Solar film) to the inside of home or apartment windows. It reduces solar heat gain, UV radiation, and glare while preserving natural light transmission.' },
  { q: 'How much does residential window tinting cost in Brisbane?', a: 'Residential window tinting in Brisbane starts from $390 for up to 5 windows (Privacy Glass) and $790 for up to 12 windows (Solar Comfort). Whole-home pricing is quoted on application. Contact NextLvl Protection at Acacia Ridge for a site-specific estimate.' },
  { q: 'Does window film really reduce heat in a Brisbane home?', a: 'Yes — measurably. 3M Solar film rejects up to 78% of incoming solar heat. In Brisbane homes with west or north-facing rooms, the temperature difference after installation can be 5–10°C in direct afternoon sun. The reduction in air conditioning run time is also noticeable.' },
  { q: 'What is 3M window film?', a: '3M is one of the world\'s largest manufacturers of window film. 3M Solar film uses a multi-layer construction to selectively block infrared (heat) and UV radiation while transmitting visible light. NextLvl Protection is a 3M Authorised Window Film Installer.' },
  { q: 'How long does 3M window film last in a Queensland home?', a: '3M window film in residential applications typically lasts 10–20 years. Longevity depends on aspect (west-facing glass degrades faster under direct afternoon sun), glass type (double-glazed glass generates more heat and can affect some films), and maintenance. 3M\'s limited warranty covers defects in film and adhesive.' },
  { q: 'Will window film damage my glass?', a: 'No — correctly installed 3M window film will not damage the glass itself. However, some films are not compatible with certain glass types (particularly some double-glazed, heat-absorbing, or tempered glass configurations). We assess glass type before specifying film to ensure compatibility.' },
  { q: 'Can I have window film removed if I change my mind?', a: 'Yes — window film can be professionally removed without damaging the glass. DIY removal often leaves adhesive residue that is difficult to clean without scratching. We offer removal and replacement as a service.' },
  { q: 'Does window film affect the view from inside?', a: 'Modern 3M Solar film has minimal impact on outward clarity. The primary change is a slight reduction in visible light and a slight tint appearance. The view does not become blurry or significantly distorted. We carry film samples so you can assess the effect before committing.' },
  { q: 'What is the difference between privacy film and solar film?', a: 'Privacy film prioritises blocking the view from outside (low VLT, reflective exterior appearance). Solar film prioritises heat and UV rejection at a higher visible light transmission — allowing more natural light while blocking heat. Many installations use privacy film in bedrooms and bathrooms, solar film in living areas.' },
  { q: 'Does window film work on double-glazed windows?', a: '3M has specific film products rated for double-glazed (IGU) glass. Standard residential solar films applied to double-glazed units without compatibility verification can cause thermal stress fractures. We always check before installation.' },
  { q: 'Can renters install window film in Queensland?', a: 'Tenants in Queensland require written approval from the property owner or manager before installing window film. Film is typically removable, but it is the tenant\'s responsibility to obtain approval. We can provide product specifications and installation details to support an owner approval request.' },
  { q: 'Will window film make my home look tinted from the outside?', a: 'Some films have a reflective appearance from outside during daylight hours. The degree of external reflectivity depends on the film type and the interior vs. exterior light balance. Solar films designed for residential use are typically low-reflectivity. We can show you samples in both directions before installation.' },
  { q: 'Does window film prevent furniture fading?', a: 'Window film significantly slows UV-related fading by blocking up to 99% of UV radiation. UV is a primary driver of fading in carpets, timber floors, upholstery, and artwork. Solar heat is another driver — and solar film addresses both.' },
  { q: 'How long after installation before I can clean the windows?', a: 'Wait 30 days before cleaning newly installed window film. During this period, the adhesive is curing. Haze or water pockets visible in the first few weeks are normal and will resolve. After 30 days, clean with an ammonia-free glass cleaner and a soft cloth.' },
  { q: 'Can window film be installed on skylights?', a: 'Yes — 3M window film can be applied to skylight glass. We assess the skylight glass type and access before confirming compatibility and pricing. Skylights are a high-impact location for UV and heat.' },
  { q: 'Is window tinting appropriate for heritage-listed homes?', a: 'Heritage-listed properties may have restrictions on modifications that affect external appearance. We recommend checking with your local council heritage officer before installation. In many cases, low-reflectivity films that preserve the external appearance of the original glass are acceptable.' },
  { q: 'What is safety window film?', a: '3M safety film holds shattered glass together in the event of breakage, reducing injury risk from flying glass shards. It is used in high-wind areas, ground-floor windows, and any application where glass breakage is a risk. It can be combined with solar film properties in a single product.' },
  { q: 'Does window tinting provide privacy at night?', a: 'The one-way privacy effect of window film relies on the light differential — it works when it is brighter outside than inside (daytime). At night, when interior lighting is brighter than the exterior, the effect reverses — and anyone outside can see in. For night privacy, blinds or curtains are still required.' },
  { q: 'Can window film be installed on the outside of glass?', a: 'Some speciality 3M films are rated for exterior installation. Exterior-mounted film is exposed to weathering and typically has a shorter lifespan than interior-mounted film. We specify exterior-rated film where needed (e.g., accessible skylights, specific commercial applications).' },
  { q: 'Where is NextLvl Protection and what areas do you service?', a: 'We\'re at Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110 and service all of greater Brisbane for residential window tinting. Call 0411 164 886, email halo@nextlvlprotection.com.au, or use the quote form to book.' },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function ResidentialTintQuestionsPage() {
  useEffect(() => {
    document.title = 'Residential Window Tinting Questions — Brisbane | NextLvl Protection';
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'faq-schema';
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { const el = document.getElementById('faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh' }}>
      <section style={{ padding: '140px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto' }}>
        <p style={{ color: 'var(--color-accent)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>AEO Hub — Residential Tinting</p>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Residential Window Tinting — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
          Everything homeowners and renters need to know about 3M residential window film in Brisbane. Written by NextLvl Protection — 3M Authorised Installer, Acacia Ridge, QLD.
        </p>
        <FAQAccordion items={faqs} />
      </section>
      <section style={{ padding: '40px var(--section-padding-x)', maxWidth: 780, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/residential-window-tinting-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>Residential Packages &amp; Pricing</span></Link>
          <Link to="/commercial-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Commercial Tinting Q&A</Link>
          <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting Q&A</Link>
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to make your home cooler?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
  );
}
