import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Eye, Car, ArrowRight, Instagram } from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import CTABlock from '../components/CTABlock';
import PageMeta from '../components/PageMeta';
import heroHome from '../assets/Hero-image 1.png';
import logo3M from '../assets/3M.png';
import logoNXTZEN from '../assets/NXTZEN.png';
import logoSunTek from '../assets/suntek-automotive-window-film-seeklogo.png';
import logoSolarGard from '../assets/solar-gard-seeklogo.png';
import mustangPpf from '../assets/mustang-ppf1.png';
import autoTintHero from '../assets/tesla-model-matte.png';
import ig0 from '../assets/Website-photos/Screenshot 2026-03-16 181728.jpg';
import ig1 from '../assets/Website-photos/Screenshot 2026-03-16 181319.jpg';
import ig2 from '../assets/Website-photos/Screenshot 2026-03-16 181459.jpg';
import ig3 from '../assets/Website-photos/Screenshot 2026-03-16 181519.jpg';
import ig4 from '../assets/Website-photos/Screenshot 2026-03-16 181532.jpg';
import ig5 from '../assets/Website-photos/Screenshot 2026-03-16 181609.jpg';
import ig6 from '../assets/Website-photos/Screenshot 2026-03-16 181625.jpg';
import ig7 from '../assets/Website-photos/Screenshot 2026-03-16 181647.jpg';
import ig8 from '../assets/Website-photos/Screenshot 2026-03-16 181712.jpg';

const services = [
  {
    icon: Shield,
    title: 'Paint Protection Film',
    sub: 'SunTek Authorised',
    desc: 'Self-healing urethane film that takes the hit so your paint doesn\'t. Invisible protection with a 12-year warranty.',
    href: '/ppf-brisbane',
    img: mustangPpf,
  },
  {
    icon: Droplets,
    title: 'Ceramic Coating',
    sub: 'NXTZEN Certified',
    desc: 'Hydrophobic nano-ceramic layer bonded to your paint. Water beads. Gloss deepens. UV can\'t touch it.',
    href: '/ceramic-coating-brisbane',
    img: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&q=80',
  },
  {
    icon: Car,
    title: 'Automotive Window Tinting',
    sub: 'Solar Gard VTX PRO Certified',
    desc: 'Premium solar film engineered to reject heat and UV — not just darken glass. Queensland-legal VLT options.',
    href: '/automotive-window-tinting-brisbane',
    img: autoTintHero,
  },
  {
    icon: Eye,
    title: 'Window Tinting',
    sub: '3M Authorised Installer',
    desc: 'Residential and commercial. Heat rejection, UV blocking, privacy, and glare control — using 3M and Solar Gard film.',
    href: '/automotive-window-tinting-brisbane',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
];

const igPhotos = [
  { src: ig0, alt: 'BYD Shark — window tint' },
  { src: ig1, alt: 'Porsche 911 GT3 — PPF' },
  { src: ig2, alt: 'BMW XM — ceramic coating' },
  { src: ig3, alt: 'Toyota LandCruiser — PPF' },
  { src: ig4, alt: 'Ferrari 296 — ceramic coating' },
  { src: ig5, alt: 'Audi Q8 e-tron — PPF' },
  { src: ig6, alt: 'BMW X7 — ceramic coating' },
  { src: ig7, alt: 'Mercedes G-Wagon — PPF' },
  { src: ig8, alt: 'Porsche Macan Turbo — ceramic coating' },
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
        title="Next LVL Protection | PPF | Ceramic Coating | Window Tinting Brisbane"
        description="Brisbane's certified PPF, ceramic coating and window tinting specialists. NXTZEN Certified, SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised. Based in Acacia Ridge. Call 0468 810 666."
        canonical="https://www.nextlvlprotection.com.au/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Next LVL Protection",
        "telephone": "0468810666",
        "email": "halo@nextlvlprotection.com.au",
        "url": "https://www.nextlvlprotection.com.au",
        "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110", "addressCountry": "AU" },
        "geo": { "@type": "GeoCoordinates", "latitude": -27.5667, "longitude": 153.0167 },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:30" }],
        "areaServed": "Brisbane",
        "description": "Brisbane's certified paint protection film, ceramic coating, and window tinting specialists. NXTZEN Certified, SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised Installer.",
      })}} />

      {/* HERO */}
      <section
        ref={heroRef}
        className="home-hero"
        style={{ position: 'relative', height: '85dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        aria-label="Hero — Paint &amp; Glass Protection Brisbane"
      >
        {/* Background image */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute', inset: '-20% 0 0 0', zIndex: 0,
            backgroundImage: `url(${heroHome})`,
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        {/* Grain overlay at 50% opacity */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.5,
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'400\' height=\'400\' filter=\'url(%23noise)\' opacity=\'0.7\'/></svg>")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay — dark cinematic */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)' }} aria-hidden="true" />
        {/* Feathered bottom edge — blends into brand bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, zIndex: 2, background: 'linear-gradient(to bottom, transparent 0%, #0F1219 100%)' }} aria-hidden="true" />

        {/* Content */}
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 900, padding: '0 24px' }}>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>
            <span
              className="hero-anim font-display hero-text-mono"
              style={{ fontSize: 'clamp(48px, 8vw, 96px)', letterSpacing: '-0.02em', lineHeight: 0.95, WebkitTextStroke: '0.5px rgba(255,255,255,0.01)' }}
            >
              Next LVL{' '}<span style={{ color: '#fff' }}>Protection.</span>
            </span>
          </h1>

          <p className="hero-anim" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 400, margin: 0, marginTop: 20, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            PPF · Ceramic Coating · Window Tinting — Brisbane
          </p>

          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
              <span className="btn-slide" />
              <span>Contact Us</span>
            </Link>
            <Link to="/warranties" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', padding: '14px 32px', fontSize: 15 }}>Warranties</Link>
          </div>
        </div>
      </section>

      {/* BRAND BAR — flush below hero */}
      <div className="brand-bar">
        {[
          { src: logoNXTZEN, alt: 'NXTZEN' },
          { src: logo3M, alt: '3M' },
          { src: logoSunTek, alt: 'SunTek' },
          { src: logoSolarGard, alt: 'Solar Gard' },
        ].map(logo => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="brand-bar-logo"
          />
        ))}
      </div>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="section services-wave-bg" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>What We Do</p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', color: '#FFFFFF' }}>
              Five Services.<br /><span style={{ color: 'rgba(255,255,255,0.5)' }}>One Standard.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20 }}>
            {services.map(s => {
              const Icon = s.icon;
              return (
                <Link to={s.href} key={s.href} className="card service-card" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', position: 'relative', height: 320 }}>
                  {/* Image layer — reveals from left on hover */}
                  <div className="sc-img" style={{ backgroundImage: `url(${s.img})` }} />
                  {/* Text content — slides right on hover */}
                  <div className="sc-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <Icon size={20} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                      <ArrowRight size={16} color="rgba(255,255,255,0.3)" strokeWidth={1.5} className="sc-arrow" />
                    </div>
                    <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>{s.sub}</p>
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '0.02em', marginBottom: 12, color: '#FFFFFF' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section" style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>Why Next LVL</p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 24, lineHeight: 1.05 }}>
                Certified Product.<br /><span style={{ color: 'var(--color-accent)' }}>Precision Install.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
                Any installer can buy film off the shelf. NXTZEN Certified, SunTek Authorised, Solar Gard VTX PRO Certified, 3M Authorised — these certifications mean we've been vetted by the brands that manufacture the best products on the market.
              </p>
              <Link to="/about" className="btn-ghost">About the Studio</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { num: '01', title: 'Brand-certified, not generic', desc: 'NXTZEN, SunTek, Solar Gard VTX PRO, 3M — not commodity products from an unknown supplier.' },
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


      {/* INSTAGRAM GALLERY */}
      <section className="section" style={{ background: 'conic-gradient(from 180deg at 50% 120%, #1a1f2e 0deg, #0F1219 120deg, #1a1520 240deg, #0F1219 360deg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
<h2 className="font-display" style={{ fontSize: 'var(--size-h1)', color: '#FFFFFF', margin: 0 }}>Gallery.</h2>
            </div>
            <a
              href="https://instagram.com/lokilokiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Instagram size={15} strokeWidth={1.5} />
              Follow on Instagram
            </a>
          </div>

          <a href="https://instagram.com/lokilokiz/" target="_blank" rel="noopener noreferrer" className="ig-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, textDecoration: 'none' }}>
            {igPhotos.map((photo, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: '1' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </a>
        </div>
      </section>

      {/* GOOGLE REVIEWS — custom section with 4 cards and link */}
      <GoogleReviews
        reviews={reviews}
        googleUrl="https://www.google.com/maps/place/Next+LVL+Protection/@-27.580488,153.0004076,17z/data=!4m8!3m7!1s0x6b914f1de0e15ecf:0x8db70f1d98fcb413!8m2!3d-27.5804928!4d153.0029825!9m1!1b1!16s%2Fg%2F11mznvy7kn?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
      />

      {/* CTA */}
      <CTABlock service="Protection Package" />
    </>
  );
}
