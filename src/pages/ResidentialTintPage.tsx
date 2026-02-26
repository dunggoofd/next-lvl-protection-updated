import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Shield, Eye, Thermometer, Award, Home, Check } from 'lucide-react';
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
    name: 'Privacy Glass',
    subtitle: 'Privacy and glare control — bedrooms, bathrooms, street-facing windows',
    inclusions: ['Up to 5 windows', '3M window film (privacy or solar)', 'UV rejection: 99%', '3M limited warranty'],
    price: 'From $390',
  },
  {
    name: 'Solar Comfort',
    subtitle: 'Heat reduction + UV protection — living areas and high-sun rooms',
    inclusions: ['Up to 12 windows', '3M Solar film (heat and UV optimised)', 'Heat rejection up to 78%', 'UV rejection: 99%', 'Glare reduction', '3M limited warranty'],
    price: 'From $790',
    recommended: true,
  },
  {
    name: 'Whole Home',
    subtitle: 'Full property coverage — every window, custom film selection',
    inclusions: ['Whole home — unlimited windows', '3M Solar / Safety / Privacy film (mix per room)', 'Heat rejection up to 78%', 'UV rejection: 99%', 'Consultation + custom film recommendation per zone', '3M limited warranty'],
    price: 'POA',
  },
];

const benefits = [
  { icon: Thermometer, title: 'Heat rejection up to 78%', desc: '3M Solar film is among the highest-performing residential window films available. In Brisbane\'s summer, the difference is immediate.' },
  { icon: Sun, title: '99% UV protection', desc: 'Protects furniture, flooring, and artwork from UV-induced fading — the same UV that damages paint on cars damages interiors too.' },
  { icon: Eye, title: 'Glare control', desc: 'Reduce harsh glare on screens and in living spaces without completely blocking natural light.' },
  { icon: Shield, title: 'Safety film options', desc: '3M safety film holds shattered glass together in the event of breakage — relevant for high-wind areas and ground-floor windows.' },
  { icon: Home, title: 'Privacy without blinds', desc: 'One-way mirror effect during daylight hours. Visibility from outside is limited; natural light inside is preserved.' },
  { icon: Award, title: '3M Authorised Installer', desc: 'We\'re a 3M Authorised Window Film Installer. That means access to the full 3M range and a manufacturer-backed warranty — not a third-party guarantee.' },
];

const faqs = [
  { q: 'How much does home window tinting cost in Brisbane?', a: 'Residential window tinting in Brisbane starts from $390 for up to 5 windows, and $790 for up to 12 windows with our Solar Comfort package. Whole-home pricing is quoted on application. At NextLvl Protection in Acacia Ridge, pricing is based on window count and film type.' },
  { q: 'How long does residential window tinting take?', a: 'A 5-window installation typically takes 2–3 hours. A 12-window Solar Comfort package usually takes 4–6 hours. Whole-home projects are quoted and staged based on property size. We work around your schedule and don\'t leave until every window passes inspection.' },
  { q: 'What is the best window film for west-facing windows in Brisbane?', a: '3M Solar film with high TSER (Total Solar Energy Rejection) is the best choice for west-facing windows — the aspect that gets the most direct afternoon sun in Brisbane. We specify film per zone during the consultation so the right product goes on the right window.' },
  { q: 'How long does 3M window film last?', a: '3M window film in residential applications typically lasts 10–20 years depending on exposure. West-facing windows in direct Brisbane sun degrade faster than south-facing. The 3M limited warranty covers defects in materials and workmanship for the warranty period.' },
  { q: 'Can window film be removed without damaging the glass?', a: 'Yes — 3M window film can be removed by a professional without damaging the glass. Film removal is a separate service. DIY removal often leaves adhesive residue that is difficult to clean without scratching. We offer removal and replacement on request.' },
  { q: 'Will tinted windows reduce my view?', a: 'In most cases, the reduction in view clarity is negligible — particularly with modern 3M Solar film. The primary reduction is in glare and heat, not visible light transmission. We carry sample sets you can view before committing to a film.' },
  { q: 'Can renters tint their windows in Queensland?', a: 'In Queensland, tenants generally need written approval from the property owner before making modifications such as window film. Film is typically removable, but approval is the tenant\'s responsibility. We\'re happy to provide documentation to support an owner approval request.' },
  { q: 'What is a 3M Authorised Installer?', a: 'A 3M Authorised Installer has been vetted by 3M, trained in 3M installation standards, and has access to the full 3M Window Film product range. The authorisation means the warranty on your film is backed by 3M — not just a general installer guarantee. NextLvl Protection is a 3M Authorised Installer in Acacia Ridge, Brisbane.' },
];

const reviews = [
  { name: 'Priya K.', suburb: 'Coopers Plains', service: 'Residential Tinting — Solar Comfort', text: 'West-facing living room was unbearable in summer. 3M Solar film has made it usable again. Installation was clean, no mess, done in a few hours.' },
  { name: 'Helen J.', suburb: 'Algester', service: 'Residential Tinting — Whole Home', text: 'Whole home quote was detailed and fair. They specified different films for different aspects — that attention to detail impressed me before they even started.' },
  { name: 'Kevin T.', suburb: 'Parkinson', service: 'Residential Tinting — Privacy Glass', text: 'Bathroom and bedroom privacy film — you\'d never know it\'s there from inside, but no one can see in from the street. Exactly what I needed.' },
];

export default function ResidentialTintPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (els) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      if (heroBgRef.current && heroRef.current)
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['window']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>Residential Window Tinting — Brisbane</span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>3M Authorised.</span>
          </h1>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 500 }}>
            Block up to 78% of solar heat and 99% of UV. Brisbane summers are relentless — your home shouldn't feel it.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Get a Quote</span></Link>
            <a href="#packages" className="btn-ghost">View Packages</a>
          </div>
        </div>
      </section>

      <section id="packages" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Residential Packages</h2>
          <PackageVisualizer tiers={tiers} diagramType="house" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div><h2 className="font-display" style={{ fontSize: 'var(--size-h2)', lineHeight: 1.05 }}>Why 3M Film</h2></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {benefits.map((b, i) => { const Icon = b.icon; return (
                <div key={i} className="card" style={{ padding: '24px 20px' }}>
                  <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 14 }} />
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ); })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 48 }}>The Workshop Floor</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Site Assessment', desc: 'We assess window aspect, glass type, and your primary goals before recommending film. The right film for a west-facing bedroom is different from the right film for a street-facing bathroom.' },
              { step: '02', title: 'Installation', desc: '3M film is cut to each window, applied with precision, and squeegeed free of moisture. Edges are pressed tight to gaskets. We work clean — no water on floors or furnishings.' },
              { step: '03', title: 'QC + Handover', desc: 'Every window inspected before we pack up. We confirm cure time, provide aftercare instructions, and issue the 3M warranty documentation.' },
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

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>What's Included</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['3M Window Film — not generic film', 'Pre-installation window assessment', 'Glass cleaning and surface prep', 'Precision cut and fit per window', 'Post-installation quality inspection', '3M limited warranty documentation', 'Aftercare instructions provided at handover', '3M Authorised Installer — Acacia Ridge, Brisbane'].map((inc, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 8 }}>Protection Backed by 3M</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>3M limited warranty — residential installations</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Film delamination or peeling', 'Adhesive failure', 'Discolouration under normal conditions', 'Coverage: all 3M installations by NextLvl Protection'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10 }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '36px 28px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 16 }}>Aftercare</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Wait 30 days before cleaning newly tinted windows.', 'Use a soft cloth and ammonia-free glass cleaner only.', 'Do not use abrasive pads or razor blades on film.', 'Haze or water pockets in the first few weeks are normal — they resolve as the adhesive cures.', 'If any edge lifts within the warranty period, contact us before attempting to re-apply it yourself.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10 }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Before &amp; After</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <BeforeAfterSlider before="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" after="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80" alt="Residential window tint before and after" height={300} />
            <BeforeAfterSlider before="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" after="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" alt="Home window tint before and after" height={300} />
          </div>
          <Link to="/gallery" style={{ color: 'var(--color-accent)', fontSize: 14 }}>See More Work →</Link>
        </div>
      </section>

      <Reviews reviews={reviews} aggregate={{ score: 4.9, count: 87 }} />

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Residential Tinting Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Want more detailed answers?{' '}<Link to="/residential-tinting-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Read our complete Residential Tinting Q&amp;A →</Link></p>
          </div>
        </div>
      </section>

      <section className="section noise-overlay" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: 24 }}>Generic film fades. Generic installers cut corners on prep. Generic warranties aren't backed by anyone.</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>We install <span style={{ color: 'var(--color-accent)' }}>3M.</span> Backed by 3M.</h2>
        </div>
      </section>

      <CTABlock service="Residential Window Tinting" defaultService="Residential Window Tinting" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/commercial-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Commercial Window Tinting</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Window Tinting</Link>
            <Link to="/residential-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Tinting Q&A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
