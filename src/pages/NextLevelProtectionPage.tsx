import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Shield, Droplets, Car, Home, Award, Check, ArrowRight, MapPin } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import FAQAccordion from '../components/FAQAccordion';
import CTABlock from '../components/CTABlock';
import logoNXTZEN from '../assets/NXTZEN.png';
import logo3M from '../assets/3M.png';
import logoSunTek from '../assets/suntek-automotive-window-film-seeklogo.png';
import logoSolarGard from '../assets/solar-gard-seeklogo.png';

const serviceCards = [
  {
    icon: Shield,
    title: 'PPF & Ceramic Coating',
    desc: 'Self-healing film that takes the hit so your paint doesn\'t. Ceramic coating that makes washing take half the time. Both backed by manufacturer warranties up to 12 years.',
    links: [
      { label: 'Paint Protection Film', href: '/ppf-brisbane' },
      { label: 'Ceramic Coating', href: '/ceramic-coating-brisbane' },
    ],
  },
  {
    icon: Home,
    title: 'Residential Services',
    desc: 'Cut heat and glare from west-facing rooms. Block 99% of UV without losing your view. 3M and Solar Gard film — installed in a few hours.',
    links: [
      { label: 'Residential Tinting', href: '/residential-window-tinting-brisbane' },
      { label: 'Commercial Tinting', href: '/commercial-window-tinting-brisbane' },
    ],
  },
  {
    icon: Car,
    title: 'Tinting Services',
    desc: 'Your car stays cooler, your interior lasts longer, and you stay legal. Solar Gard VTX PRO ceramic film — real heat rejection, not just a darker window.',
    links: [
      { label: 'Automotive Tinting', href: '/automotive-window-tinting-brisbane' },
    ],
  },
  {
    icon: Award,
    title: 'Product Warranties',
    desc: 'If something fails, the manufacturer fixes it — not just us. That\'s what a real warranty looks like.',
    links: [
      { label: 'View Warranties', href: '/warranties' },
    ],
  },
];

const trustPoints = [
  { icon: Award, title: 'Manufacturer Warranties', desc: 'Every installation is backed by a manufacturer warranty — SunTek, NXTZEN, Solar Gard, and 3M.' },
  { icon: Shield, title: 'Certified Installers', desc: 'Authorised and certified across four premium product lines. Not self-appointed — manufacturer-verified.' },
  { icon: MapPin, title: 'Brisbane Local', desc: 'Acacia Ridge, Brisbane\'s south. Walk in, see the studio, meet the team before you commit.' },
  { icon: Droplets, title: 'Premium Products Only', desc: 'No grey-market film, no unbranded ceramics. Every product is sourced directly from the manufacturer.' },
  { icon: Check, title: 'No Shortcuts on Prep', desc: 'Every surface is decontaminated, corrected where needed, and inspected before film or coating is applied.' },
  { icon: Car, title: 'All Vehicle Types', desc: 'GR86s to GT3s. Every vehicle gets the same prep process — no shortcuts because it\'s \'just a daily.\'' },
];

const faqs = [
  { q: 'Is Next Level Protection the same as Next LVL Protection?', a: 'Yes. Next Level Protection is the full name of the business — we operate under the brand Next LVL Protection. Same team, same studio, same certifications. The abbreviated name is used across our website, social media, and signage.' },
  { q: 'Where is Next Level Protection located?', a: 'We\'re based at Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110 — in Brisbane\'s south. We serve the greater Brisbane area within a 30km radius.' },
  { q: 'What services does Next Level Protection offer?', a: 'We specialise in paint protection film (PPF), ceramic coating, and window tinting — for automotive, residential, and commercial applications. All installations use certified products from SunTek, NXTZEN, Solar Gard, and 3M.' },
  { q: 'Is Next Level Protection a certified installer?', a: 'Yes. We hold four manufacturer certifications: NXTZEN Certified Applicator, SunTek Authorised Installer, Solar Gard VTX PRO Authorised Installer, and 3M Authorised Window Film Installer.' },
  { q: 'How do I get a quote from Next Level Protection?', a: 'You can request a quote through our online form, call us on 0468 810 666, or email halo@nextlvlprotection.com.au. We respond within 2 business hours.' },
  { q: 'Does Next Level Protection offer warranties?', a: 'Every product we install is covered by a manufacturer warranty. SunTek PPF carries up to a 12-year warranty, NXTZEN ceramic coatings carry up to 10 years, and 3M and Solar Gard window films are backed by their respective manufacturer warranty programs.' },
];

export default function NextLevelProtectionPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = heroContentRef.current?.querySelectorAll('.hero-anim');
      if (heroEls) {
        gsap.from(heroEls, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      }
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          scrollTrigger: { trigger: heroRef.current, scrub: true },
          y: '20%', ease: 'none',
        });
      }
      if (gridRef.current) {
        gsap.from(gridRef.current.querySelectorAll('.service-card'), {
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
          y: 32, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageMeta
        title="Next Level Protection Brisbane | PPF, Ceramic Coating & Tinting"
        description="Next Level Protection (Next LVL Protection) is Brisbane's certified automotive and property protection studio. PPF, ceramic coating, and window tinting — installed by authorised specialists in Acacia Ridge."
        canonical="https://www.nextlvlprotection.com.au/next-level-protection-brisbane"
      />

      {/* Schema: AutoRepair with alternateName */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Next LVL Protection",
        "alternateName": ["Next Level Protection", "Next Level Protection Brisbane", "NLP Brisbane"],
        "url": "https://www.nextlvlprotection.com.au",
        "telephone": "0468810666",
        "email": "halo@nextlvlprotection.com.au",
        "address": { "@type": "PostalAddress", "streetAddress": "Unit 16, 18-24 Loam St", "addressLocality": "Acacia Ridge", "addressRegion": "QLD", "postalCode": "4110", "addressCountry": "AU" },
        "geo": { "@type": "GeoCoordinates", "latitude": -27.5585, "longitude": 153.0197 },
        "areaServed": { "@type": "City", "name": "Brisbane" },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:30" }],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Protection Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paint Protection Film (PPF)" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Window Tinting" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Window Tinting" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Window Tinting" }},
          ],
        },
      })}} />

      {/* Schema: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />

      {/* Schema: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nextlvlprotection.com.au/" },
          { "@type": "ListItem", "position": 2, "name": "Next Level Protection Brisbane", "item": "https://www.nextlvlprotection.com.au/next-level-protection-brisbane" },
        ],
      })}} />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{ position: 'relative', height: '75dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        aria-label="Next Level Protection Brisbane"
      >
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute', inset: '-20% 0 0 0', zIndex: 0,
            backgroundImage: "url('/NLP-Shop.jpeg')",
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.5,
            backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'400\' height=\'400\' filter=\'url(%23noise)\' opacity=\'0.7\'/></svg>")',
            backgroundRepeat: 'repeat', backgroundSize: 'auto',
          }}
          aria-hidden="true"
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)' }} aria-hidden="true" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, zIndex: 2, background: 'linear-gradient(to bottom, transparent 0%, #0F1219 100%)' }} aria-hidden="true" />

        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 3, maxWidth: 900, padding: '0 24px' }}>
          <p className="hero-anim" style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Next LVL Protection — Brisbane
          </p>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>
            <span
              className="hero-anim font-display hero-text-mono"
              style={{ fontSize: 'clamp(40px, 7vw, 84px)', letterSpacing: '-0.02em', lineHeight: 0.95 }}
            >
              Next Level Protection
            </span>
            <span
              className="hero-anim font-display"
              style={{ display: 'block', fontSize: 'clamp(28px, 5vw, 56px)', color: 'var(--color-accent)', lineHeight: 1, marginTop: 8 }}
            >
              in Brisbane.
            </span>
          </h1>
          <p className="hero-anim" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(14px, 1.8vw, 17px)', fontWeight: 400, margin: 0, marginTop: 24, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Your paint, glass, and property — protected by the same brands that warranty the product. Four manufacturer certifications. One studio.
          </p>
          <div className="hero-anim" style={{ display: 'flex', gap: 16, marginTop: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
              <span className="btn-slide" />
              <span>Get a Quote</span>
            </Link>
            <Link to="/about" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', padding: '14px 32px', fontSize: 15 }}>About Us</Link>
          </div>
        </div>
      </section>

      {/* BRAND BAR */}
      <div className="brand-bar">
        {[
          { src: logoNXTZEN, alt: 'NXTZEN Certified' },
          { src: logo3M, alt: '3M Authorised' },
          { src: logoSunTek, alt: 'SunTek Authorised' },
          { src: logoSolarGard, alt: 'Solar Gard Certified' },
        ].map(logo => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} className="brand-bar-logo" />
        ))}
      </div>

      {/* SERVICE GRID — 2x2 matching wireframe */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>
              What We Do
            </p>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h1)', marginBottom: 16, lineHeight: 1.05 }}>
              PPF. Ceramic Coating. Window Tinting. All Under One Roof.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>
              SunTek. NXTZEN. 3M. Solar Gard. Four certified product lines — installed in one studio.
            </p>
          </div>

          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {serviceCards.map(card => (
              <div key={card.title} className="card service-card" style={{ padding: 'clamp(24px, 3vw, 32px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <card.icon size={28} color="var(--color-accent)" strokeWidth={1.5} />
                <h3 className="font-display" style={{ fontSize: 'var(--size-h3)', marginBottom: 0 }}>{card.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.7, flex: 1 }}>{card.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.links.map(link => (
                    <Link
                      key={link.href}
                      to={link.href}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-accent)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
                    >
                      {link.label} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS NEXT LEVEL PROTECTION */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p style={{ fontSize: 'var(--size-label)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>
                The Short Version
              </p>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>
                Who Is Next Level Protection?
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Next Level Protection (Next LVL Protection) is a PPF, ceramic coating, and window tinting studio in Acacia Ridge, Brisbane. Founded by Loki — certified across SunTek, NXTZEN, Solar Gard, and 3M — every job is installed by someone who can actually void or honour the warranty.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                We hold certifications from four premium manufacturers: NXTZEN (ceramic coatings), SunTek (paint protection film), Solar Gard (automotive and commercial window film), and 3M (residential and commercial window film). These aren't self-appointed titles — each certification means the manufacturer has audited our installation quality and stands behind our work with their warranty.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
                Every installation starts with a full decontamination and paint inspection. If the surface isn't ready, the film doesn't go on. It takes longer. It costs more. But it's why our warranty claims are near zero.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 className="font-display" style={{ fontSize: 'var(--size-h3)', marginBottom: 8 }}>Certifications</h3>
              {[
                { title: 'NXTZEN Certified Applicator', desc: 'Certified to apply the full NXTZEN professional ceramic range under manufacturer warranty terms.' },
                { title: 'SunTek Authorised Installer', desc: 'Authorised to install SunTek PPF and window film with manufacturer-backed warranties.' },
                { title: 'Solar Gard VTX PRO Authorised', desc: 'Authorised installer for Solar Gard automotive and commercial window films.' },
                { title: '3M Authorised Window Film Installer', desc: 'Authorised installer for the full 3M residential and commercial window film range.' },
              ].map(cert => (
                <div key={cert.title} className="card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <Check size={18} color="var(--color-accent)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: 'var(--color-text-primary)' }}>{cert.title}</p>
                      <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-muted)', fontSize: 13 }}>
                <MapPin size={14} />
                <span>Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NEXT LEVEL PROTECTION */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 16 }}>
              Why Choose Next Level Protection
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
              The protection is only as good as the installation behind it.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {trustPoints.map(point => (
              <div key={point.title} style={{ padding: '24px 0' }}>
                <point.icon size={24} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: 'var(--color-text-primary)' }}>{point.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 12 }}>
              Before You Enquire
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 16 }}>
              What most people ask before booking.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABlock service="Protection" defaultService="General Enquiry" />
    </>
  );
}
