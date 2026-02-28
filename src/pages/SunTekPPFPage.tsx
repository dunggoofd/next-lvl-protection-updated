import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Award, Shield, Check, Zap } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import FAQAccordion from '../components/FAQAccordion';
import Reviews from '../components/Reviews';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';


const benefits = [
  { icon: Award, title: 'SunTek Authorised Application Centre', desc: 'NextLvl Protection is an SunTek Authorised Application Centre in Brisbane. SunTek\'s manufacturer warranty is only valid on installations performed by authorised centres — not general PPF installers using alternative sourcing.' },
  { icon: Shield, title: 'SunTek Ultra — Tier One Film', desc: 'SunTek Ultra is SunTek\'s flagship PPF product. It carries a 10-year manufacturer warranty covering delamination, yellowing, cracking, and hazing. The self-healing elastomeric topcoat closes light surface scratches under heat.' },
  { icon: Zap, title: 'Self-Healing Topcoat', desc: 'SunTek Ultra\'s topcoat reflows under ambient heat to eliminate light swirl marks. Brisbane\'s UV environment activates this automatically in parked conditions — no product or treatment required.' },
  { icon: Check, title: 'Optically Clear Finish', desc: 'SunTek Ultra is precision-engineered for optical clarity. When installed over gloss paint, the film is indistinguishable at normal viewing distance. No orange-peel texture. No visible edges on properly tucked installs.' },
  { icon: Award, title: 'SunTek Ultra Matte Available', desc: 'For vehicles requiring a satin finish or transformation from gloss to matte, SunTek Ultra Matte is available at NextLvl Protection. Same 10-year warranty, same self-healing capability — different topcoat finish.' },
  { icon: Shield, title: 'End-to-End Warranty Documentation', desc: 'Every SunTek PPF install at NextLvl Protection includes manufacturer warranty documentation, installer certification reference, installation date, and panel coverage record — all provided at handover.' },
];

const faqs = [
  { q: 'What makes SunTek PPF different from other brands?', a: 'SunTek is a tier-one PPF manufacturer with a consistent product line and structured installer authorisation programme. The key differences from lower-tier alternatives: (1) the 10-year manufacturer warranty is backed by SunTek directly, not just the installer; (2) SunTek Ultra\'s self-healing topcoat is a factory specification, not a add-on coating; (3) the film\'s optical clarity and conformability are consistent batch to batch.' },
  { q: 'How does SunTek compare to XPEL?', a: 'SunTek and XPEL are both tier-one PPF manufacturers. Both produce films with self-healing topcoats and manufacturer warranties. Differences exist in film weight, conformability on complex curves, and warranty terms by product line — but both are legitimate high-quality products. The installer\'s skill and installation environment matter as much as the brand choice at this tier.' },
  { q: 'Is SunTek PPF made in the USA?', a: 'SunTek is a US-headquartered company. Its PPF products are manufactured in the United States. The brand is part of the Eastman Chemical Company portfolio, which also owns LLumar window films.' },
  { q: 'How do I know if an installer is SunTek Authorised?', a: 'Authorised Application Centres are listed on the SunTek website. NextLvl Protection appears on the SunTek installer directory as a Brisbane authorised centre. If a PPF installer claims to use SunTek film but is not on the official directory, the manufacturer warranty on their installs may not be valid.' },
  { q: 'Does SunTek PPF require any special maintenance?', a: 'SunTek Ultra PPF is maintained with pH-neutral automotive shampoo and clean microfibre. Avoid alkaline or acidic cleaners, automatic car washes with brushes, and pressure-washing directly at film edges. A ceramic coating compatible with PPF (such as SunTek\'s own CC36) adds hydrophobic performance over the top. A detailed aftercare guide is provided with every NextLvl Protection install.' },
  { q: 'What SunTek products does NextLvl Protection install?', a: 'NextLvl Protection installs SunTek Ultra PPF (gloss) and SunTek Ultra Matte PPF on all applicable packages. Window tinting at NextLvl Protection is performed with Solar Gard products — not SunTek window film — as our window tinting line is a separate authorisation.' },
  { q: 'Can SunTek PPF be removed without damaging the paint?', a: 'Yes, when removed correctly. SunTek Ultra is designed for safe removal from factory paint. Film that has been installed on properly prepared paint (no existing damage, correct surface prep) and is removed within the warranty period should come off cleanly. Very old or brittle paint should be assessed before removal. We do not perform mobile removal — all removal work is done in-studio.' },
];

const reviews = [
  { name: 'Alex T.', suburb: 'Calamvale', service: 'SunTek PPF — Front End Package', text: 'Did research on brands before booking. SunTek and XPEL were both considered. The authorised status of NextLvl combined with their SunTek pricing made the decision straightforward. Film is optically invisible at any distance.' },
  { name: 'Sophie G.', suburb: 'Eight Mile Plains', service: 'SunTek PPF — Track Package', text: 'Wanted to know the film was warranted by someone other than just the installer. SunTek\'s direct manufacturer warranty was the deciding factor. Three years on — film is flawless.' },
  { name: 'Danny N.', suburb: 'Sunnybank', service: 'SunTek Ultra Matte — Full Front', text: 'Matte PPF on a pearl white car. The transformation is exactly what the photos on SunTek\'s site show. The installer authorisation matters — you see it in the quality of the edges and the clarity of the film.' },
];

export default function SunTekPPFPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (els) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="SunTek PPF Brisbane | Authorised SunTek Installer | NextLvl Protection"
        description="SunTek Authorised PPF installer in Brisbane. SunTek Ultra paint protection film with 10-year warranty. Acacia Ridge studio."
        canonical="https://www.nextlvlprotection.com.au/suntek-ppf-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SunTek PPF Brisbane — Authorised Paint Protection Film Installer",
        "provider": { "@type": "LocalBusiness", "name": "NextLvl Protection", "telephone": "0411164886", "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110" }},
        "areaServed": "Brisbane",
        "description": "SunTek Authorised PPF installer in Brisbane. SunTek Ultra 10-year manufacturer warranty. Self-healing topcoat. Gloss and matte available. Acacia Ridge studio.",
      })}} />

      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>SunTek PPF Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Authorised Installer.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            NextLvl Protection is a SunTek Authorised Application Centre in Brisbane. SunTek Ultra PPF — 10-year manufacturer warranty, self-healing topcoat, optically clear finish.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <Link to="/ppf-brisbane" className="btn-ghost">View All Packages</Link>
          </div>
        </div>
      </section>

      {/* WHY SUNTEK */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>SunTek Authorised</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>Why SunTek at NextLvl Protection</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <b.icon size={22} color="var(--color-accent)" style={{ marginBottom: 12 }} />
                <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{b.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILM SPEC TABLE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>SunTek Ultra — Film Specifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { spec: 'Film Type', value: 'Thermoplastic polyurethane (TPU) with elastomeric topcoat' },
              { spec: 'Warranty', value: '10 years — delamination, yellowing, cracking, hazing' },
              { spec: 'Self-Healing', value: 'Elastomeric topcoat — activates under heat (approx. 60°C surface temp)' },
              { spec: 'Finish', value: 'Gloss (optically clear) or Matte (satin-flat) — both available at NextLvl Protection' },
              { spec: 'Thickness', value: '8mil total — film body + topcoat combined' },
              { spec: 'UV Resistance', value: 'UV absorber integrated into film — no yellowing under Australian UV conditions within warranty period' },
              { spec: 'Adhesive', value: 'Pressure-sensitive adhesive — safe removal from factory paint' },
              { spec: 'Manufacturer', value: 'SunTek Window Films — Eastman Chemical Company. Manufactured in USA.' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: '16px 24px', borderRadius: i === 0 ? '4px 4px 0 0' : i === 7 ? '0 0 4px 4px' : 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--color-text-muted)' }}>{row.spec}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews reviews={reviews} aggregate={{ score: 4.9, count: 87 }} />

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>SunTek PPF Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock service="SunTek PPF" defaultService="SunTek Paint Protection Film" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>All PPF Packages</Link>
            <Link to="/ppf-warranty-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Warranty</Link>
            <Link to="/ppf-self-healing-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Self-Healing PPF</Link>
            <Link to="/gloss-vs-matte-ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Gloss vs Matte PPF</Link>
          </div>
        </div>
      </section>
    </>
  );
}
