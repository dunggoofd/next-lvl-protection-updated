import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Sun, Shield, Eye, Thermometer, Award, Check, Wifi, Zap, Home, EyeOff, Droplets, Monitor, Lock, Sofa } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';

const faqs = [
  { q: 'Will window film make my home too dark?', a: 'No. 3M Solar films transmit 40–70% of visible light — you lose the heat, not the view. We bring sample sets to every consultation so you can see exactly how it looks on your glass before committing.' },
  { q: 'What\'s the difference between solar film and cheap tint?', a: '3M Prestige uses over 200 micro-layers of nano-optical technology to target infrared heat while transmitting visible light. Cheap tint is dyed polyester that darkens your windows, fades within a few years, and offers minimal heat rejection. They\'re not comparable products.' },
  { q: 'How much will it actually reduce my power bill?', a: 'The IWFA estimates professionally installed solar control film can cut cooling costs by up to 30%. In a Brisbane home where air conditioning is your single largest summer expense, that reduction compounds every year. West and north-facing rooms see the biggest difference.' },
  { q: 'Does the privacy film still let light in?', a: 'Yes. One-way privacy film works on the contrast principle — the brighter side can\'t see into the darker side. During the day, you have full natural light inside while maintaining privacy from the street. At night, interior lighting reverses this, so curtains are still useful after dark.' },
  { q: 'How long does shower glass coating last?', a: 'Professional-grade hydrophobic shower glass coatings typically last 2–5 years with normal use. The surface becomes significantly easier to clean — soap scum and water staining are dramatically reduced from day one.' },
  { q: 'Can you do skylights?', a: 'Yes. Skylights are one of the highest heat-gain points in any Brisbane home. We apply solar film directly to the skylight glass, reducing heat entry without replacing the unit. It\'s one of the most cost-effective fixes for overheating rooms.' },
  { q: 'Will security film stop a break-in?', a: 'Security film won\'t stop a determined intruder indefinitely, but it significantly delays entry — glass that should shatter on impact holds together. It also prevents dangerous glass fragmentation in storms, impacts, and accidents. Most break-ins are opportunistic: if the glass doesn\'t give immediately, they move on.' },
  { q: 'What is a 3M Authorised Installer?', a: 'A 3M Authorised Installer has been vetted and trained by 3M directly. The manufacturer warranty on your film is backed by 3M Corporation — not just a local business guarantee. Next LVL Protection is a 3M Authorised Installer operating from Acacia Ridge, Brisbane.' },
  { q: 'Do you do whole-home packages?', a: 'Yes. Most homeowners have multiple problems — heat from the west, privacy from the street, glare in the home office, and cleaning time on the shower. We assess your home zone by zone and build a package that addresses every issue in one installation visit.' },
  { q: 'How long does installation take?', a: 'A standard 3–4 bedroom home takes 1–2 days depending on window count and film selection. We work around your schedule and leave the property clean. Film cures fully within 2–4 weeks of installation.' },
];

const SERVICES = [
  {
    icon: Sun,
    title: 'Solar Window Tinting',
    pain: 'Hot rooms. High power bills.',
    fix: 'Block up to 78% of solar heat at the glass — before the AC ever needs to kick in. West and north-facing rooms feel noticeably different from day one.',
  },
  {
    icon: EyeOff,
    title: 'Privacy Film',
    pain: 'Neighbours can see straight in.',
    fix: 'Frosted and one-way films give you full natural light inside with zero street visibility during daylight. No blinds. No compromise on light.',
  },
  {
    icon: Shield,
    title: 'Security Film',
    pain: 'Glass that shatters on impact.',
    fix: 'Shatter-resistant film holds glass together during break-ins, storms, and accidents. The glass cracks — it doesn\'t fragment. Entry is delayed. Injury is reduced.',
  },
  {
    icon: Droplets,
    title: 'Shower Glass Coating',
    pain: 'Soap scum you can\'t get rid of.',
    fix: 'Hydrophobic coating makes water and soap bead straight off. Cleaning time cut by up to 80%. One treatment lasts years.',
  },
  {
    icon: Home,
    title: 'Whole-Home Package',
    pain: 'Heat, privacy, glare — all at once.',
    fix: 'We assess every zone in your home and build a single-visit solution. Solar film on the west, privacy on the street-facing rooms, security on entry glass. Done properly, once.',
  },
  {
    icon: Monitor,
    title: 'Anti-Glare Home Office Film',
    pain: 'Screen glare you work around daily.',
    fix: 'Reduces glare without blocking natural light. No more repositioning your desk or squinting through the afternoon. Installed directly on the problem window.',
  },
  {
    icon: Zap,
    title: 'Skylight Heat Reduction',
    pain: 'The hottest room in the house.',
    fix: 'Applied directly to skylight glass — no replacement needed. Targets the highest solar heat gain point in most Brisbane homes for immediate room temperature improvement.',
  },
  {
    icon: Lock,
    title: 'Entry Glass Privacy + Security',
    pain: 'People can see straight through your front door.',
    fix: 'One-way privacy combined with security film on entry glass. You keep the view out. Nobody gets an easy look in — or an easy way through.',
  },
  {
    icon: Sofa,
    title: 'Fabric & Surface Protection',
    pain: 'Spills, stains, wear on good furniture.',
    fix: 'Professional-grade fabric and stone protection for couches, rugs, and benchtops. Repels liquids before they absorb. Particularly useful for families and high-traffic areas.',
  },
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
      <PageMeta
        title="Residential Window Tinting Brisbane | 3M Authorised Installer | Next LVL Protection"
        description="3M Authorised residential window tinting Brisbane. Solar film, privacy film, security film, shower glass coating. Cut heat by 78%. Acacia Ridge, Southside Brisbane."
        canonical="https://www.nextlvlprotection.com.au/residential-window-tinting-brisbane"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Residential Window Tinting Brisbane",
        "provider": { "@type": "LocalBusiness", "name": "Next LVL Protection", "telephone": "0468810666", "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110" }},
        "areaServed": "Brisbane",
        "description": "3M Authorised residential window film installer in Acacia Ridge, Brisbane. Solar tinting, privacy film, security film, shower glass coating.",
        "dateModified": "2026-03-19",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />

      {/* S1: HERO */}
      <section ref={heroRef} style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <style>{`
          @media (max-width: 768px) { .residential-hero-bg { background-position: left calc(50% + 150px) !important; } }
          .hero-3m-text {
            -webkit-text-stroke: 0.2px transparent;
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,210,255,0.5) 50%, rgba(255,255,255,0.2) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
        <div ref={heroBgRef} className="residential-hero-bg" style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('/Residential-hero-image.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center calc(50% + 150px)' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.6) 50%, rgba(10,10,12,0.2) 100%)' }} aria-hidden="true" />
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-anim"><TrustBadges services={['window']} /></div>
          <h1 style={{ marginTop: 28 }}>
            <span className="hero-anim font-display" style={{ fontSize: 'var(--size-h1)', color: '#fff', lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>
              Your home shouldn't feel like a greenhouse.
            </span>
            <span className="hero-anim font-display hero-3m-text" style={{ display: 'block', fontSize: 'calc(var(--size-hero) * 0.75)', lineHeight: 0.95, marginTop: 4 }}>
              3M Authorised.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 560 }}>
            Solar tinting. Privacy film. Security glass. Shower coatings. One installer, properly done — backed by a 3M Lifetime Warranty. Serving Southside Brisbane from Acacia Ridge.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary"><span className="btn-slide" /><span>Book Free Home Assessment</span></Link>
            <a href="#services" className="btn-ghost">See All Services</a>
          </div>
        </div>
      </section>

      {/* S2: THE BRISBANE PROBLEM */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">01</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Brisbane UV &amp; Heat</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 8 }}>Queensland glass was not designed for Queensland sun.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 660, marginBottom: 40 }}>
            Standard double-glazed windows block less than 25% of UVA. In Brisbane, where the UV index sits at extreme for six months of the year, that means your furniture, flooring, and interiors are taking full sun exposure every day — and your air conditioner is fighting a losing battle.
          </p>
          <img
            src="/ChatGPT Image Mar 19, 2026, 09_01_26 PM.png"
            alt="Brisbane residential window tinting"
            style={{ display: 'block', width: '100%', borderRadius: 8, objectFit: 'cover', marginBottom: 40 }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { stat: 'UV 15', label: 'Peak summer UV index', desc: 'Extreme threshold is 6. Brisbane spends 6 months above it.' },
              { stat: '25%', label: 'UVA blocked by standard glass', desc: 'The rest passes straight through. Your furniture and flooring absorb it daily.' },
              { stat: '$2,143', label: 'Avg QLD electricity bill', desc: 'Highest in Australia. Air conditioning in summer is the single biggest cost.' },
              { stat: '30%', label: 'Home energy lost via windows', desc: 'Stop it at the glass — before the AC has to respond.' },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                <span className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'var(--color-accent)', lineHeight: 1, display: 'block', marginBottom: 8 }}>{s.stat}</span>
                <span style={{ fontSize: 12, fontWeight: 700, display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</span>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: SERVICES GRID */}
      <section id="services" className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">02</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>What We Do</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 8 }}>Every problem. One installer.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 620, marginBottom: 48 }}>
            Most homes have more than one issue. We solve heat, privacy, security, and maintenance in a single visit — using the right product for each zone, not a one-size-fits-all approach.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                    <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color="var(--color-accent)" strokeWidth={1.5} />
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{s.title}</span>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>{s.pain}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.fix}</p>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, margin: 0 }}>
              Not sure what you need? We assess your home for free and recommend only what will actually make a difference.
            </p>
            <Link to="/get-a-quote" className="btn-primary" style={{ flexShrink: 0 }}><span className="btn-slide" /><span>Book Assessment</span></Link>
          </div>
        </div>
      </section>

      {/* S4: SOLAR TINTING — PRIMARY OFFER */}
      <section id="how-it-works" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">03</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Solar Window Tinting</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 8 }}>Cut the heat. Keep the view.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 640, marginBottom: 40 }}>
            Heat enters your home as infrared radiation — invisible light you can't see but absolutely feel. Standard glass lets almost all of it through. 3M Prestige film uses hundreds of nano-optical layers to reject up to 97% of infrared while still transmitting 40–70% of visible light. The room stays bright. The heat stays outside.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
            {[
              {
                icon: Thermometer,
                stat: 'Up to 78%',
                label: 'Solar heat blocked',
                desc: 'Infrared rejection at the glass means your air conditioner handles less load. West-facing rooms in Brisbane homes can be 5–10°C cooler on direct sun afternoons.',
              },
              {
                icon: Sun,
                stat: '99.9%',
                label: 'UV radiation blocked',
                desc: 'UV causes 40–60% of all colour fading in furniture and flooring. Your timber floors, leather couches, and artwork keep their condition for years longer.',
              },
              {
                icon: Eye,
                stat: 'Full',
                label: 'View preserved',
                desc: 'Spectrally selective film targets heat wavelengths, not visible light. You don\'t have to choose between a cooler room and a view — you get both.',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                  <Icon size={28} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                  <span className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--color-accent)', lineHeight: 1, display: 'block', marginBottom: 4 }}>{c.stat}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: 12 }}>{c.label}</span>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            {[
              { icon: Wifi, text: 'Non-metallized — no WiFi, mobile or Bluetooth interference' },
              { icon: Shield, text: 'Skin Cancer Foundation Seal of Recommendation' },
              { icon: Award, text: 'NFRC 100/200/304 performance tested' },
            ].map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={16} color="var(--color-accent)" strokeWidth={1.5} />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{t.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S5: HIGH-MARGIN UPSELLS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">04</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Also Popular</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 8 }}>More ways to protect your home.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 620, marginBottom: 48 }}>
            Most clients add one or more of these to their solar tinting install. They solve real problems and the ROI is immediate — either in time saved, comfort gained, or risk reduced.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                icon: Droplets,
                title: 'Shower Glass Coating',
                tag: 'Most popular add-on',
                tagColor: 'var(--color-accent)',
                body: 'Hydrophobic coating applied to existing shower glass. Water and soap bead straight off — cleaning time cut by up to 80%. No more scrubbing calcium and soap scum off frameless glass. One treatment, professionally applied, lasts years.',
                cta: 'Add to your install',
              },
              {
                icon: EyeOff,
                title: 'Privacy Window Film',
                tag: 'Street-facing rooms',
                tagColor: '#888',
                body: 'Frosted or one-way film for bathrooms, street-facing living areas, and entry glass. Full natural light inside. Zero visibility from the street during daylight. No blinds needed. No light sacrificed.',
                cta: 'Book assessment',
              },
              {
                icon: Shield,
                title: 'Security & Shatter-Resistant Film',
                tag: 'Safety',
                tagColor: '#888',
                body: 'Applied to entry doors, windows, and ground-floor glass. When broken, the glass holds together rather than fragmenting. Significantly delays forced entry. Reduces injury from accidental glass breakage and storm damage.',
                cta: 'Book assessment',
              },
              {
                icon: Home,
                title: 'Whole-Home Package',
                tag: 'Best value',
                tagColor: 'var(--color-accent)',
                body: 'Solar film on the hot rooms. Privacy on the street-facing windows. Security on entry glass. Shower coating on the frameless screens. We zone your home, specify the right product for each area, and do it in one visit.',
                cta: 'Get package quote',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="card" style={{ padding: '32px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} />
                      </span>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>{c.title}</span>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: c.tagColor, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{c.tag}</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{c.body}</p>
                  <Link to="/get-a-quote" style={{ color: 'var(--color-accent)', fontSize: 13, fontWeight: 600 }}>{c.cta} →</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S6: 3M COMPARISON */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">05</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Why 3M</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 8 }}>Not all window film is the same.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 660, marginBottom: 40 }}>
            Cheap tint darkens your windows to block heat — it trades one problem for another. 3M Prestige uses spectral selectivity to target infrared energy specifically, without reducing visible light or darkening the glass. The specs below aren't marketing — they're independently tested figures.
          </p>
          <div className="card" style={{ padding: '28px 24px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Specification</th>
                  <th style={{ textAlign: 'center', padding: '10px 12px', color: 'var(--color-accent)', fontWeight: 700 }}>3M Prestige</th>
                  <th style={{ textAlign: 'center', padding: '10px 12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>3M Ceramic</th>
                  <th style={{ textAlign: 'center', padding: '10px 12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Cheap Film</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { spec: 'Infrared heat rejection', prestige: 'Up to 97%', ceramic: 'Up to 80%', cheap: '20–40%' },
                  { spec: 'Total solar energy rejected', prestige: 'Up to 60%', ceramic: 'Up to 59%', cheap: '25–40%' },
                  { spec: 'UV rejection', prestige: '99.9%', ceramic: '99%', cheap: '50–80%' },
                  { spec: 'Visible light transmission', prestige: '40–70%', ceramic: '15–70%', cheap: 'Variable' },
                  { spec: 'WiFi / signal interference', prestige: 'None', ceramic: 'None', cheap: 'Common' },
                  { spec: 'Manufacturer warranty', prestige: 'Lifetime', ceramic: 'Lifetime', cheap: '1–5 yrs or none' },
                  { spec: 'Carbon negative timeline', prestige: '6 months', ceramic: '~12 months', cheap: 'Not measured' },
                ].map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{r.spec}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--color-accent)', fontWeight: 600 }}>{r.prestige}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>{r.ceramic}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--color-text-muted)' }}>{r.cheap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginTop: 16, lineHeight: 1.6 }}>
            3M Prestige films are non-metallized — corrosion-resistant in Brisbane's coastal-adjacent humidity with zero interference to home devices.
          </p>
        </div>
      </section>

      {/* S7: BEFORE & AFTER */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">06</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Our Work</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Before &amp; After</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            <BeforeAfterSlider before="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" after="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80" alt="Residential window tint before and after" height={300} />
            <BeforeAfterSlider before="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" after="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" alt="Home window tint before and after" height={300} />
          </div>
          <Link to="/gallery" style={{ color: 'var(--color-accent)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            See More Work →
          </Link>
        </div>
      </section>

      {/* S8: WARRANTY */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative' }}>
        <span className="section-number" aria-hidden="true">07</span>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>Warranty &amp; Trust</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 12 }}>3M Lifetime Warranty. On every install.</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.75, maxWidth: 640, marginBottom: 40 }}>
            Most window film warranties are backed by the installer — meaning they're only as good as the business. 3M's warranty is backed by 3M Corporation directly. If the installer closes, the warranty stands.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="card" style={{ padding: '32px 24px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em', marginBottom: 8 }}>3M Limited Lifetime Warranty</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: 14, marginBottom: 16 }}>What's covered</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Delamination', 'Adhesive failure', 'Discolouration', 'Bubbling, cracking, and crazing', 'Lifetime of property ownership', 'Transferable to new owners'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '32px 24px' }}>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: '0.02em', marginBottom: 20 }}>NLP vs Generic Installer</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ textAlign: 'left', padding: '8px 0', color: 'var(--color-accent)', fontWeight: 600 }}>Next LVL Protection</th>
                    <th style={{ textAlign: 'left', padding: '8px 0', color: 'var(--color-text-muted)', fontWeight: 500 }}>Generic Installer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nlp: '3M Lifetime Warranty', generic: 'No warranty or 1–2yr' },
                    { nlp: 'Backed by 3M Corporation', generic: 'Backed by local ABN' },
                    { nlp: 'Genuine 3M film only', generic: 'Generic or unbranded' },
                    { nlp: 'Trained by 3M directly', generic: 'No oversight or vetting' },
                    { nlp: 'NFRC-tested specifications', generic: 'No verifiable data' },
                    { nlp: 'Warranty transferable', generic: 'Void if installer closes' },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px 0', color: 'var(--color-text-primary)' }}>{r.nlp}</td>
                      <td style={{ padding: '10px 0', color: 'var(--color-text-muted)' }}>{r.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link to="/warranties" style={{ color: 'var(--color-accent)', fontSize: 14 }}>Read our full Warranty Guide →</Link>
          </div>
        </div>
      </section>

      {/* S9: FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 12, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last reviewed March 2026</p>
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Common Questions</h2>
          <FAQAccordion items={faqs} />
          <div style={{ marginTop: 40, padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 4, border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              More detailed answers?{' '}
              <Link to="/residential-tinting-questions" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Read our complete Residential Tinting Q&amp;A →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Residential Window Tinting" defaultService="Residential Window Tinting" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Related</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/commercial-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Commercial Tinting</Link>
            <Link to="/automotive-window-tinting-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Automotive Tinting</Link>
            <Link to="/warranties" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Warranty Guide</Link>
            <Link to="/residential-tinting-questions" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Residential Tinting Q&amp;A</Link>
          </div>
        </div>
      </section>
    </>
  );
}
