import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, MapPin, Clock, Phone, Mail, Shield, Star } from 'lucide-react';
import CTABlock from '../components/CTABlock';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { title: 'SunTek Authorised Installer', desc: 'Authorised to install SunTek PPF and window film under manufacturer warranty terms.' },
  { title: 'Solar Gard Authorised Installer', desc: 'Authorised installer for Solar Gard automotive and commercial window films.' },
  { title: '3M Authorised Window Film Installer', desc: 'Authorised installer for the full 3M Window Film residential and commercial range.' },
];

const values = [
  { icon: Shield, title: 'No shortcuts on prep', desc: 'Prep is where most installers cut corners. We don\'t. Every surface is decontaminated, corrected where needed, and inspected before film or coating goes near it.' },
  { icon: Star, title: 'Product quality is non-negotiable', desc: 'We only use SunTek, Solar Gard, and 3M — the three certified brands we know and trust. No grey-market film, no unbranded ceramic products.' },
  { icon: Award, title: 'Backed by manufacturer warranties', desc: 'Every installation is covered by a manufacturer warranty — not just our word. SunTek, Solar Gard, and 3M all have formal warranty programs that we operate within.' },
];

const team = [
  { name: 'Dung Luong', role: 'Founder & Lead Installer', note: 'SunTek Certified | Solar Gard Certified | 3M Authorised' },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroBgRef.current && heroRef.current)
        gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} style={{ position: 'relative', height: '70dvh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 10vh' }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: '-20% 0 0 0', zIndex: 0, backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(248,249,251,0.75) 50%, transparent 100%)' }} aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ marginTop: 28 }}>
            <span className="font-display" style={{ display: 'block', fontSize: 'var(--size-h1)', color: 'var(--color-text-primary)', lineHeight: 1 }}>About NextLvl Protection</span>
            <span className="font-display" style={{ display: 'block', fontSize: 'var(--size-hero)', color: 'var(--color-accent)', lineHeight: 0.95, marginTop: 4 }}>Acacia Ridge.</span>
          </h1>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 24 }}>The Workshop</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                NextLvl Protection is a certified PPF, ceramic coating, and window film installation studio based at Acacia Ridge in Brisbane's south. We work on prestige and everyday vehicles, residential properties, and commercial buildings.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Our certifications are from SunTek, Solar Gard, and 3M — the manufacturers behind the products we install. That means manufacturer-backed warranties, not self-issued guarantees.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
                Every installation starts with prep. We don't coat or film over contamination, swirl marks, or compromised paint. It takes longer and costs more. That's how it should be done.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Location</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>Unit 16, 18-24 Loam St<br />Acacia Ridge QLD 4110</p>
                </div>
              </div>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Clock size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Hours</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.6 }}>Monday – Friday: 9:00am – 5:30pm<br />Weekends: By appointment</p>
                </div>
              </div>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Phone</p>
                  <a href="tel:0411164886" style={{ color: 'var(--color-accent)', fontSize: 13 }}>0411 164 886</a>
                </div>
              </div>
              <div className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Mail size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Email</p>
                  <a href="mailto:halo@nextlvlprotection.com.au" style={{ color: 'var(--color-accent)', fontSize: 13 }}>halo@nextlvlprotection.com.au</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {certifications.map((c, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px' }}>
                <Award size={20} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {values.map((v, i) => { const Icon = v.icon; return (
              <div key={i} className="card" style={{ padding: '36px 28px' }}>
                <Icon size={22} color="var(--color-accent)" strokeWidth={1.5} style={{ marginBottom: 18 }} />
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: '0.02em', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 40 }}>Team</h2>
          <div style={{ display: 'flex', gap: 24 }}>
            {team.map((t, i) => (
              <div key={i} className="card" style={{ padding: '36px 28px', maxWidth: 360 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: 'var(--color-accent)' }}>{t.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{t.name}</h3>
                <p style={{ color: 'var(--color-accent)', fontSize: 13, marginBottom: 14 }}>{t.role}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 12, lineHeight: 1.6 }}>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section noise-overlay" style={{ background: 'var(--color-bg-primary)', position: 'relative', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <h2 className="font-display" style={{ fontSize: 'var(--size-hero)', lineHeight: 0.9 }}>Protection is<br /><span style={{ color: 'var(--color-accent)' }}>a craft.</span></h2>
        </div>
      </section>

      <CTABlock service="your vehicle or property" defaultService="Paint Protection Film" />

      <section style={{ background: 'var(--color-bg-secondary)', padding: '40px var(--section-padding-x)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/gallery" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>View Gallery</Link>
            <Link to="/ppf-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>PPF Packages</Link>
            <Link to="/ceramic-coating-brisbane" className="btn-ghost" style={{ padding: '10px 20px', fontSize: 13 }}>Ceramic Coating</Link>
          </div>
        </div>
      </section>
    </>
  );
}
