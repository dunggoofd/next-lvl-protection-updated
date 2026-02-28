import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import PageMeta from '../components/PageMeta';

const faqs = [
  { q: 'What is ceramic coating?', a: 'Ceramic coating is a liquid polymer applied to a vehicle\'s exterior that chemically bonds to the factory paint, forming a hard, hydrophobic protective layer. It repels water, resists UV, and makes the surface significantly easier to maintain.' },
  { q: 'How long does ceramic coating last?', a: 'Professional ceramic coatings last 2–5 years depending on the product and the level of maintenance. Signature-grade coatings in ideal conditions can last longer. Consumer spray-on "ceramic" products are not equivalent — professional application uses a certified, multi-layer product.' },
  { q: 'Is ceramic coating worth it in Brisbane?', a: 'Yes — Brisbane\'s UV index and high humidity make ceramic coating particularly valuable. UV causes paint oxidation and fading; ceramic coating\'s UV resistance significantly slows this process. The hydrophobic effect also means bird droppings and industrial fallout are easier to remove before they etch the clear coat.' },
  { q: 'How much does ceramic coating cost in Brisbane?', a: 'Ceramic coating in Brisbane starts from $699 (Essential) through to $1,999+ for multi-layer Elite applications. At NextLvl Protection, every package includes a paint decontamination and single-stage machine polish at minimum.' },
  { q: 'What is paint correction and why is it done before ceramic coating?', a: 'Paint correction is the process of removing swirl marks, holograms, and light scratches from the clear coat using machine polishers and abrasive compounds. Ceramic coating seals everything underneath it — including imperfections. If you coat without correcting, you seal the swirls in permanently.' },
  { q: 'Can ceramic coating go over PPF?', a: 'Yes — in fact, ceramic coating over PPF is the recommended combination. PPF absorbs physical impacts; ceramic coating on top provides hydrophobic protection and UV resistance for the PPF itself. The correct order is: paint correction → PPF → ceramic coating.' },
  { q: 'Does ceramic coating prevent stone chips?', a: 'No. Ceramic coating does not have the physical thickness or elasticity to absorb stone chip impacts. For stone chip protection, you need PPF. Ceramic coating provides chemical and UV protection, not physical impact protection.' },
  { q: 'How do I wash a ceramic-coated car?', a: 'Use pH-neutral car shampoo, a clean microfibre mitt, and the two-bucket method. Avoid automated car washes with brushes — they introduce swirl marks. Touchless (contactless) car washes are acceptable for light washes between detail washes.' },
  { q: 'How long does ceramic coating installation take?', a: 'An Essential package takes 1–2 days. A Protection package takes 2–3 days. An Elite package with full paint correction can take 3–5 days. The majority of the time is in prep — decontamination and polishing — not the coating application itself.' },
  { q: 'What is a paint inspection and why is it important?', a: 'Before coating, we assess your paint under studio lighting for swirl marks, holograms, water etch marks, and scratches. This determines what level of paint correction is needed. We will not coat without a paint inspection — it\'s the only way to guarantee what goes under the ceramic layer is clean.' },
  { q: 'Can ceramic coating be applied to a new car?', a: 'Yes — in fact, new cars benefit most from early ceramic protection before UV and environmental damage begin. New car paint often has dealer wash swirls and should be inspected and corrected before coating regardless of age.' },
  { q: 'Can ceramic coating be applied to matte paint?', a: 'Some ceramic coatings are formulated for matte paint. Standard gloss ceramic coatings will alter the appearance of matte surfaces. If your vehicle has factory matte or satin paint, advise us at quoting stage so the correct product is specified.' },
  { q: 'Does ceramic coating require maintenance?', a: 'Yes — ceramic coating is not zero maintenance. Regular washing with pH-neutral products, periodic maintenance washes with a ceramic booster, and avoiding harsh chemicals will extend coating life significantly. We provide a full maintenance guide at handover.' },
  { q: 'What is the SunTek/Solar Gard ceramic coating range?', a: 'At NextLvl Protection, we use SunTek and Solar Gard ceramic coatings depending on the package and application. Both are manufacturer-backed products with defined warranty terms. We do not use unbranded or grey-market ceramic products.' },
  { q: 'What happens if my car gets a scratch on a ceramic-coated surface?', a: 'Ceramic coating provides scratch resistance, not scratch immunity. Light marring (car wash swirls) is resisted. Deep scratches through the clear coat are not prevented. For physical scratch protection, PPF is the appropriate product.' },
  { q: 'How long after ceramic coating application can I drive my car?', a: 'We recommend waiting 24 hours before driving and 7 days before washing. Avoid parking under trees or in areas with heavy contamination during the cure period. We provide full aftercare instructions at handover.' },
  { q: 'Can ceramic coating be applied to wheels?', a: 'Yes — ceramic coating for wheels is available as an add-on or as part of our Elite and Signature packages. Coated wheels repel brake dust and make cleaning significantly easier.' },
  { q: 'What is multi-layer ceramic coating?', a: 'Multi-layer ceramic coating involves applying two or more coats of ceramic product over the paint, allowing each layer to cure before the next is applied. More layers generally means greater hardness, depth, and longevity — and a higher price. Our Elite and Signature packages use multi-layer application.' },
  { q: 'Does NextLvl Protection offer a warranty on ceramic coating?', a: 'Yes — all NextLvl Protection ceramic installations are backed by a workmanship warranty and the applicable manufacturer product warranty. Warranty terms vary by package. We provide documentation at handover.' },
  { q: 'Where is NextLvl Protection located and what areas do you cover?', a: 'We\'re based at Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110. We service all of greater Brisbane. Call 0411 164 886 or use the quote form on this site to book.' },
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

export default function CeramicQuestionsPage() {
  useEffect(() => {
    document.title = 'Ceramic Coating Questions — Brisbane | NextLvl Protection';
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'faq-schema';
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { const el = document.getElementById('faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <PageMeta
        title="Ceramic Coating Questions Answered | Brisbane | NextLvl Protection"
        description="Answers to common ceramic coating questions — cost, longevity, paint correction, aftercare. NextLvl Protection, Brisbane."
        canonical="https://www.nextlvlprotection.com.au/ceramic-coating-questions"
      />
    <main style={{ background: 'var(--color-bg-primary)', minHeight: '100dvh' }}>
      <section style={{ padding: '140px var(--section-padding-x) 60px', maxWidth: 780, margin: '0 auto' }}>
        <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Ceramic Coating — Brisbane Questions</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
          Every common (and uncommon) question about ceramic coating answered honestly. Written by the team at NextLvl Protection, a certified installer at Acacia Ridge, QLD.
        </p>
        <FAQAccordion items={faqs} />
      </section>
      <section style={{ padding: '40px var(--section-padding-x)', maxWidth: 780, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/ceramic-coating-brisbane" className="btn-primary" style={{ fontSize: 13 }}><span className="btn-slide" /><span>Ceramic Packages &amp; Pricing</span></Link>
          <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Q&A</Link>
          <Link to="/automotive-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting Q&A</Link>
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', padding: '14px var(--section-padding-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Ready to protect your paint?</span>
        <Link to="/get-a-quote" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}><span className="btn-slide" /><span>Get a Quote →</span></Link>
      </div>
    </main>
    </>
  );
}
