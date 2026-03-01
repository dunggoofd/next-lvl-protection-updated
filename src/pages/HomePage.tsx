import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Eye, Building2, Car, ArrowRight } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import Reviews from '../components/Reviews';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import heroHome from '../assets/hero-home.jpg';

const services = [
  {
    icon: Shield,
    title: 'Paint Protection Film',
    sub: 'SunTek Authorised',
    desc: 'Self-healing urethane film that takes the hit so your paint doesn\'t. Invisible protection with a 10-year warranty.',
    href: '/ppf-brisbane',
    from: 'From $599',
  },
  {
    icon: Droplets,
    title: 'Ceramic Coating',
    sub: 'Precision Application',
    desc: 'Hydrophobic nano-ceramic layer bonded to your paint. Water beads. Gloss deepens. UV can\'t touch it.',
    href: '/ceramic-coating-brisbane',
    from: 'From $699',
  },
  {
    icon: Car,
    title: 'Automotive Window Tinting',
    sub: 'Solar Gard VTX PRO Certified',
    desc: 'Premium solar film engineered to reject heat and UV — not just darken glass. Queensland-legal VLT options.',
    href: '/automotive-window-tinting-brisbane',
    from: 'From $290',
  },
  {
    icon: Eye,
    title: 'Residential Window Tinting',
    sub: '3M Authorised Installer',
    desc: 'Block up to 78% of solar heat and 99% of UV. Brisbane summers are relentless — your windows shouldn\'t be.',
    href: '/residential-window-tinting-brisbane',
    from: 'From $390',
  },
  {
    icon: Building2,
    title: 'Commercial Window Tinting',
    sub: '3M Authorised Installer',
    desc: 'Offices, shopfronts, medical clinics. Energy savings, glare control, privacy — site audit and project management included.',
    href: '/commercial-window-tinting-brisbane',
    from: 'POA',
  },
];

const reviews = [
  { name: 'James T.', suburb: 'Sunnybank', service: 'PPF — Front End Package', text: 'Took my GR86 in for the front end package. The finish is immaculate — no lifting edges, no bubbles, totally invisible. Worth every dollar.' },
  { name: 'Sarah M.', suburb: 'Eight Mile Plains', service: 'Ceramic Coating — Protection', text: 'The detail on the prep work before coating was impressive. They spent hours on decon before even touching the ceramic. The results speak for themselves.' },
  { name: 'Mark R.', suburb: 'Runcorn', service: 'Automotive Tinting — Full Car', text: 'Solar Gard VTX PRO on my RAV4 — the heat difference is remarkable. Had cheap tint before, this is a completely different product and installation quality.' },
  { name: 'Priya K.', suburb: 'Coopers Plains', service: 'Residential Tinting', text: 'West-facing living room was unbearable in summer. 3M Solar film has made it usable again. Installation was clean, no mess, done in a few hours.' },
  { name: 'David L.', suburb: 'Calamvale', service: 'PPF — Track Package', text: 'Track days on weekends, daily driver all week. The track package covers everything that matters. No rock chips in 8 months of use.' },
  { name: 'Aimee W.', suburb: 'Macgregor', service: 'Ceramic Coating — Elite', text: 'Elite package on a black Mercedes. The paint correction before coating removed years of swirl marks. It looks better than the day I bought it.' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroEls = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (heroEls) {
        gsap.from(heroEls, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      }
      // Hero parallax
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          scrollTrigger: { trigger: heroRef.current, scrub: true },
          y: '20%', ease: 'none',
        });
      }
      // Services cards entrance
      if (servicesRef.current) {
        gsap.from(servicesRef.current.querySelectorAll('.service-card'), {
          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
          y: 32, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="Paint Protection Film, Ceramic Coating &amp; Window Tinting Brisbane | NextLvl Protection"
        description="Brisbane's certified PPF, ceramic coating and window tinting specialists. SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised. Based in Acacia Ridge. Call 0411 164 886."
        canonical="https://www.nextlvlprotection.com.au/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "NextLvl Protection",
        "telephone": "0411164886",
        "email": "halo@nextlvlprotection.com.au",
        "url": "https://www.nextlvlprotection.com.au",
        "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110", "addressCountry": "AU" },
        "geo": { "@type": "GeoCoordinates", "latitude": -27.5667, "longitude": 153.0167 },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:30" }],
        "areaServed": "Brisbane",
        "description": "Brisbane's certified paint protection film, ceramic coating, and window tinting specialists. SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised Installer.",
        "priceRange": "$$",
      })}} />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}
        aria-label="Hero — Paint &amp; Glass Protection Brisbane"
      >
        {/* Background image */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute', inset: '-20% 0 0 0', zIndex: 0,
            backgroundImage: `url(${heroHome})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 25%, transparent 100%)' }} aria-hidden="true" />

        {/* Sine wave decoration */}

        {/* Content */}
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>
            <span className="hero-anim font-display hero-text-mono" style={{ fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Paint &amp; Glass Protection — Brisbane
            </span>
            <span className="hero-anim font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', letterSpacing: '-0.02em', lineHeight: 0.95, marginTop: 4 }}>
              SunTek. Solar Gard. 3M.
            </span>
          </h1>
          <div className="hero-anim" style={{ marginTop: 24 }}>
            <TrustBadges />
          </div>
          <p className="hero-anim" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: 20, maxWidth: 540 }}>
            Brisbane's certified film installation specialist. One studio, four disciplines — every install precision-first.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary">
              <span className="btn-slide" />
              <span>Get a Quote</span>
            </Link>
            <Link to="/gallery" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="section services-wave-bg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>What We Do</p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h1)' }}>
              Five Services.<br /><span style={{ color: 'var(--color-accent)' }}>One Standard.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map(s => {
              const Icon = s.icon;
              return (
                <Link to={s.href} key={s.href} className="card service-card" style={{ padding: '32px 28px', display: 'block', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <Icon size={20} color="var(--color-accent)" strokeWidth={1.5} />
                    <ArrowRight size={16} color="var(--color-text-muted)" strokeWidth={1.5} />
                  </div>
                  <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 6 }}>{s.sub}</p>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</p>
                  <p style={{ color: 'var(--color-accent)', fontSize: 14, fontWeight: 500 }}>{s.from}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section noise-overlay" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Why NextLvl</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 24, lineHeight: 1.05 }}>
                Certified Product.<br /><span style={{ color: 'var(--color-accent)' }}>Precision Install.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
                Any installer can buy film off the shelf. SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised — these certifications mean we've been vetted by the brands that manufacture the best film on the market.
              </p>
              <Link to="/about" className="btn-ghost">About the Studio</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { num: '01', title: 'Brand-certified, not generic', desc: 'SunTek, Solar Gard VTX PRO, 3M — not commodity film sourced from an unknown supplier.' },
                { num: '02', title: 'Quality over volume', desc: 'Precision installs. Not a conveyor-belt shop. Every job receives full attention.' },
                { num: '03', title: 'One studio, four disciplines', desc: 'PPF, ceramic coating, car tinting, residential and commercial — all under one roof.' },
              ].map(d => (
                <div key={d.num} style={{ display: 'flex', gap: 20 }}>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 40, color: 'var(--color-accent)', opacity: 0.25, lineHeight: 1, flexShrink: 0 }}>{d.num}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{d.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.65 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', paddingTop: 'clamp(40px, 5vw, 60px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>
            We Service
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 2 }}>
            Acacia Ridge · Sunnybank · Eight Mile Plains · Moorooka · Salisbury · Rocklea · Coopers Plains · Archerfield · Runcorn · Calamvale · Algester · Parkinson · Oxley · Forest Lake · Richlands · Inala · Browns Plains · Sunnybank Hills · Macgregor · Nathan
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13, marginTop: 12 }}>
            Based at Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110. Brisbane southside specialists.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews reviews={reviews} aggregate={{ score: 4.9, count: 87 }} />

      {/* CTA */}
      <CTABlock service="Protection Package" />
    </>
  );
}
