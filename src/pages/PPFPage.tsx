import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, TrendingUp, Clock, Award, Droplets, Check } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import PackageVisualizer from '../components/PackageVisualizer';
import type { PackageTier } from '../components/PackageVisualizer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQAccordion from '../components/FAQAccordion';
import Reviews from '../components/Reviews';
import CTABlock from '../components/CTABlock';

gsap.registerPlugin(ScrollTrigger);

const tiers: PackageTier[] = [
  {
    name: 'Impact Shield',
    subtitle: 'High-impact front zones — where chips happen most',
    inclusions: ['Full bonnet leading edge (30cm)', 'Front bumper (full)', 'Front guards', 'SunTek Ultra PPF — self-healing, hydrophobic', '5-year SunTek film warranty'],
    price: 'From $599',
  },
  {
    name: 'Front End Package',
    subtitle: 'Full front protection — bonnet, bumper, guards, headlights, mirrors',
    inclusions: ['Full bonnet', 'Front bumper (full)', 'Front guards', 'Headlights', 'Mirrors', 'SunTek Ultra PPF — self-healing, hydrophobic', '10-year SunTek authorised installer warranty'],
    price: 'From $1,490',
    recommended: true,
  },
  {
    name: 'Track Package',
    subtitle: 'Front end + roof + A-pillars — extended impact coverage',
    inclusions: ['Full bonnet + front bumper + front guards + headlights + mirrors', 'Roof', 'A-pillars', 'SunTek Ultra PPF — self-healing, hydrophobic', '10-year SunTek authorised installer warranty'],
    price: 'From $2,290',
  },
  {
    name: 'Full Wrap',
    subtitle: 'Complete vehicle — every painted panel, edge to edge',
    inclusions: ['Entire exterior vehicle surface', 'SunTek Ultra PPF — self-healing, hydrophobic', 'Edge-tucked installation (no exposed edges)', '10-year SunTek authorised installer warranty'],
    price: 'POA',
  },
];

const benefits = [
  { icon: Shield, title: 'Self-healing surface', desc: 'SunTek Ultra PPF heals minor scratches and swirl marks with heat. Leave it in the sun — the film resets.' },
  { icon: Droplets, title: 'Hydrophobic topcoat', desc: 'Water, mud, and road grime bead off the surface. Less washing, cleaner paint between cleans.' },
  { icon: Zap, title: 'Impact absorption', desc: 'Urethane film absorbs rock chips, stone impacts, and road debris before they reach your clear coat.' },
  { icon: TrendingUp, title: 'Preserves resale value', desc: 'A PPF-protected car in Queensland\'s conditions will retain paint integrity that non-protected cars lose within years.' },
  { icon: Award, title: 'SunTek Authorised warranty', desc: 'Our Front End, Track, and Full Wrap packages carry a 10-year SunTek authorised installer warranty — not a generic dealer warranty.' },
  { icon: Clock, title: 'Long-term economics', desc: 'A paint correction or respray costs more than PPF. Protect it once, correctly, from the start.' },
];

const faqs = [
  { q: 'How much does PPF cost in Brisbane?', a: 'PPF in Brisbane ranges from $599 for a basic impact shield package to $1,490+ for a full front end, with full wraps quoted on application. Price varies by vehicle size and coverage area. At NextLvl Protection, our front end package — the most popular — starts at $1,490 and includes bonnet, bumper, guards, headlights, and mirrors with SunTek Ultra film and a 10-year warranty.' },
  { q: 'Is PPF worth it for a new car in Brisbane?', a: 'Yes — particularly in Queensland, where UV exposure and dusty highway conditions accelerate paint damage. Applying PPF within the first few months keeps the paint in showroom condition and protects the investment before any chips occur. The cost of quality PPF is significantly less than a future paint correction or respray.' },
  { q: 'How long does PPF last?', a: 'SunTek Ultra PPF is warranted for up to 10 years when installed by an authorised installer. In Queensland conditions, film performs well across this period. Yellowing and adhesive failure are common with lower-grade film — SunTek\'s clarity warranty covers discolouration specifically.' },
  { q: 'Does PPF change how my car looks?', a: 'High-quality PPF should be virtually invisible once installed. SunTek Ultra has optically clear top coat and no visible edges when properly tucked. Gloss PPF enhances depth; matte PPF converts gloss paint to a satin finish. We\'ll walk you through finish options before installation.' },
  { q: 'Can PPF be applied over existing paint correction?', a: 'Yes — and we recommend it. Film applied over imperfect paint traps existing defects under it. At NextLvl Protection, we inspect paint condition before every PPF job. If correction is needed, we\'ll advise before installation.' },
  { q: 'How long does PPF installation take at Acacia Ridge?', a: 'A front bumper kit takes 1–2 hours. A full front end package is typically 1 day. Full wraps require 2–4 days depending on vehicle complexity. We\'ll provide an accurate timeline at quote stage.' },
  { q: 'What is SunTek Authorised status?', a: 'SunTek Authorised Installer is a certification that confirms training, installation standards, and access to SunTek\'s full product range. Only authorised installers can provide SunTek\'s full manufacturer warranty. NextLvl Protection is one of a select group of SunTek Authorised installers in Queensland.' },
  { q: 'What voids a PPF warranty?', a: 'SunTek\'s warranty covers film failure — yellowing, peeling, adhesive failure, and cracking under normal use. It does not cover damage from improper washing, abrasive products, or chemical exposure. We provide a full aftercare guide at handover so you know exactly what to avoid.' },
];

const reviews = [
  { name: 'Tom B.', suburb: 'Sunnybank Hills', service: 'PPF — Front End Package', text: 'Track days don\'t stress me out anymore. The front end package on my M2 is holding up perfectly. Zero chips, film is completely invisible.' },
  { name: 'Chris A.', suburb: 'Moorooka', service: 'PPF — Track Package', text: 'NextLvl Protection did my GR Corolla — roof, bonnet, full front. The edge tucks are clean, no lifting. SunTek quality is obvious compared to what I had on my previous car.' },
  { name: 'Nat D.', suburb: 'Algester', service: 'PPF — Full Wrap', text: 'Full wrap on a new Porsche. These guys know what they\'re doing. Patient, meticulous, and they pointed out a paint defect on delivery that I\'d missed.' },
];

export default function PPFPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Paint Protection Film Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "NextLvl Protection", "telephone": "0411164886", "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110" }},
        "areaServed": "Brisbane",
        "description": "SunTek Authorised PPF installer in Acacia Ridge, Brisbane. Paint Protection Film packages from $599.",
      })}} />

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['ppf']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>
              Paint Protection Film — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>
              SunTek Authorised.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 500 }}>
            Invisible urethane film that absorbs rock chips and self-heals minor scratches. Installed by a SunTek Authorised installer in Acacia Ridge, Brisbane.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <a href="#packages" className="btn-ghost">View Packages</a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Choose Your Coverage</p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h2)' }}>PPF Packages</h2>
          </div>
          <PackageVisualizer tiers={tiers} diagramType="car" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>03</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Why PPF Is Worth It</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="card" style={{ padding: '24px 20px' }}>
                    <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 14 }} />
                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>The Process</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>The Workshop Floor</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Preparation', desc: 'Full decontamination wash, iron fallout removal, and clay bar treatment. Every panel is chemically clean before film touches it. Preparation is where precision installs are won or lost.' },
              { step: '02', title: 'Application', desc: 'SunTek Ultra PPF cut and installed panel by panel. We use bulk film or pre-cut kits depending on the vehicle. All edges are tucked — no exposed edges, no lifting risk. SunTek Authorised technique throughout.' },
              { step: '03', title: 'QC + Handover', desc: 'Full inspection under workshop lighting — every edge, every corner, every seam. You receive a care guide, warranty documentation, and a walkthrough of the installation before you leave.' },
            ].map(c => (
              <div key={c.step} className="card" style={{ padding: '36px 28px' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 64, color: 'var(--color-accent)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 16 }}>{c.step}</span>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: '0.02em', marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>05</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>Every PPF installation at NextLvl Protection includes the following as standard — regardless of package.</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'SunTek Ultra PPF — not a generic substitute',
                'Full decontamination wash prior to installation',
                'Panel inspection before film application',
                'Edge-tucked installation on all covered panels',
                'Post-installation quality control under workshop lighting',
                'SunTek warranty documentation',
                'Aftercare guide + care instructions at handover',
                'SunTek Authorised installer certification — QLD',
              ].map((inc, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WARRANTY + AFTERCARE */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 8 }}>Protection Backed by SunTek</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>Up to 10-year manufacturer warranty</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Yellowing and discolouration', 'Film peeling or lifting', 'Adhesive failure under normal conditions', 'Cracking or hazing', 'Coverage: all packages installed by NextLvl Protection as SunTek Authorised Installer'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 16 }}>Aftercare Instructions</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Wait 7 days before washing — film needs time to cure fully to the paint surface.',
                  'Hand wash only for the first 30 days. No automatic car washes, no high-pressure water at edges.',
                  'Use a pH-neutral car shampoo. Avoid citrus-based or solvent-based cleaners on film.',
                  'Do not apply wax or sealant over PPF — the film\'s topcoat doesn\'t need it.',
                  'If bird dropping or tree sap lands on the film, remove within 24 hours to prevent staining.',
                  'Self-healing activates with heat — direct sunlight or a warm water pour over minor scratches will reset the topcoat.',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Gallery</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Before &amp; After</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80"
              after="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
              alt="Paint protection film before and after"
              height={300}
            />
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80"
              after="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80"
              alt="PPF hood before and after"
              height={300}
            />
          </div>
          <Link to="/gallery" style={{ color: 'var(--color-accent)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            See More Work →
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews reviews={reviews} aggregate={{ score: 4.9, count: 87 }} />

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Common PPF Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              Want more detailed answers?{' '}
              <Link to="/ppf-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Read our complete PPF Q&amp;A →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section noise-overlay" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>
            Most PPF installers focus on: volume. More cars. Faster turnaround.
          </p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            We focus on: <span style={{ color: 'var(--color-accent)' }}>PRECISION.</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 24, fontSize: 'clamp(14px, 1.8vw, 17px)', maxWidth: 560, margin: '24px auto 0' }}>
            The film is only as good as the prep behind it. No shortcuts, no skipped steps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Paint Protection Film" defaultService="Paint Protection Film (PPF)" />

      {/* Internal links */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related Services</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating Brisbane</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
            <Link to="/ppf-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Questions Answered</Link>
          </div>
        </div>
      </section>
    </>
  );
}
