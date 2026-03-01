import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';

const faqs = [
  { q: 'What is paint protection film?', a: 'Paint protection film (PPF) is a clear, thermoplastic urethane film applied to vehicle paintwork to protect it from stone chips, road debris, bug acid, bird dropping etching, and light abrasions. Modern PPF is self-healing — minor surface scratches disappear with heat.' },
  { q: 'How long does paint protection film last?', a: 'High-quality PPF like SunTek UltraBarrier Pro lasts 10 years or more. The film is backed by a manufacturer warranty that covers yellowing, cracking, bubbling, and delamination. Longevity depends on correct installation and maintenance.' },
  { q: 'Is paint protection film worth it in Brisbane?', a: 'Yes — Brisbane\'s road conditions (highway gravel, construction zones) and UV intensity make PPF a sound investment. The front bumper, bonnet, and side mirrors are the highest-impact zones for chip damage.' },
  { q: 'Can paint protection film be removed?', a: 'Yes. PPF can be removed by a professional without damaging the underlying paint, provided the paint was in good condition before application. Improper DIY removal can cause paint to lift — particularly on older or re-sprayed panels.' },
  { q: 'What is the difference between PPF and ceramic coating?', a: 'PPF provides physical protection from impact — it absorbs stone chips and abrasions. Ceramic coating is a chemical layer that provides hydrophobic (self-cleaning) properties and UV resistance. The two work best together: PPF underneath, ceramic coating on top.' },
  { q: 'Can PPF go over a ceramic coating?', a: 'PPF should be applied before ceramic coating, not over it. The correct order is paint correction → PPF → ceramic coating. Applying PPF over an existing ceramic coating compromises adhesion.' },
  { q: 'Does paint protection film affect paint colour or gloss?', a: 'No — when correctly installed, PPF is optically clear and does not affect colour. The SunTek Gloss series maintains full paint depth. Some customers choose SunTek Matte PPF to achieve a satin finish on gloss paint.' },
  { q: 'How much does paint protection film cost in Brisbane?', a: 'PPF in Brisbane starts from around $599 for partial front coverage (Impact Shield) up to $2,290+ for a full track package. Full vehicle wrap is priced on application. At NextLvl Protection, every package includes SunTek PPF and our signature paint prep.' },
  { q: 'How long does PPF installation take?', a: 'A partial front package takes 1–2 days. A full front-end package takes 2–3 days. A full track package or full wrap takes 3–5+ days. Paint correction (if required) adds time. We do not rush our work.' },
  { q: 'Does PPF need to be maintained?', a: 'Yes. PPF should be washed with a pH-neutral car shampoo. Avoid high-pressure jets directly at film edges. Sealant or ceramic coating over PPF extends the protective film\'s life. We provide a full aftercare guide at handover.' },
  { q: 'Can PPF be applied to matte paint?', a: 'Yes — SunTek PPF is compatible with matte factory paint. Use SunTek Matte PPF to match the finish. Do not ceramic coat over matte paint unless specifically designed for matte surfaces.' },
  { q: 'Does PPF self-heal scratches?', a: 'SunTek UltraBarrier Pro includes a self-healing topcoat. Minor surface scratches — caused by light abrasion or fingernail marks — recover with heat (warm water or sunlight). Deep cuts do not self-heal.' },
  { q: 'What is the difference between partial and full PPF?', a: 'Partial PPF covers the highest-impact zones: bumper, bonnet, mirrors. Full PPF covers every painted surface — full bonnet, front bumper, front guards, side skirts, door edges, and rear bumper. Full coverage is ideal for new cars or track use.' },
  { q: 'Is there a warranty on PPF?', a: 'SunTek PPF carries a 10-year manufacturer warranty covering yellowing, cracking, bubbling, and delamination. NextLvl Protection backs all installations with our own workmanship guarantee. Warranty documentation is provided at handover.' },
  { q: 'Can PPF be installed on a leased vehicle?', a: 'Yes — PPF is removable and does not damage paint when professionally removed. It\'s a popular choice for leased vehicles to maintain the condition of the paint before return. Confirm with your lease provider that film application is permitted.' },
  { q: 'Can you see where the PPF is applied?', a: 'On a correctly installed vehicle, PPF is virtually invisible. Film edges are tucked into door jams, panel gaps, or wrapped around edges where possible. Some edge lines are unavoidable on certain panels but are minimised during installation.' },
  { q: 'Can PPF go on a car that has already been repainted?', a: 'Yes — but the paint must be fully cured (minimum 30–60 days after spray) and in sound condition before PPF is applied. We inspect paintwork during the quote stage and advise on any prep requirements.' },
  { q: 'What areas of Brisbane does NextLvl Protection service for PPF?', a: 'We service all of greater Brisbane from our Acacia Ridge workshop, including the Southside (Logan, Sunnybank, Moorooka), Northside (Chermside, Aspley), East (Carindale, Wynnum), West (Ipswich, Springfield), and inner city suburbs.' },
  { q: 'How do I book a PPF appointment?', a: 'Use the quote form on this website, call us on 0411 164 886, or email halo@nextlvlprotection.com.au. We\'ll confirm your vehicle details, preferred package, and a suitable appointment date.' },
  { q: 'Does NextLvl Protection use SunTek or XPEL PPF?', a: 'NextLvl Protection is a SunTek Authorised Installer. Our primary PPF range is SunTek UltraBarrier Pro (Gloss and Matte). We also have access to the Solar Gard film range for specific applications.' },
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

export default function PPFQuestionsPage() {
  useEffect(() => {
    document.title = 'Paint Protection Film Questions — Brisbane | NextLvl Protection';
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
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Paint Protection Film — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
          Everything you need to know about PPF in Brisbane — from what it is, to how long it lasts, to what it costs. Written by the team at NextLvl Protection, a SunTek Authorised Installer at Acacia Ridge, QLD.
        </p>
        <FAQAccordion items={faqs} />
      </section>

      <section style={{ padding: '40px var(--section-padding-x)', maxWidth: 780, margin: '0 auto' }}>
        <div className="link-row" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/ppf-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>PPF Packages &amp; Pricing</span></Link>
          <Link to="/ceramic-coating-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Q&A</Link>
          <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting Q&A</Link>
        </div>
      </section>

      <div className="faq-cta-bar" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to protect your paint?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
  );
}
