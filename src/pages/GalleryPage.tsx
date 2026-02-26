import { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CTABlock from '../components/CTABlock';

type Category = 'All' | 'PPF' | 'Ceramic' | 'Automotive Tint' | 'Residential Tint' | 'Commercial Tint';

const gallery = [
  { category: 'PPF', label: 'BMW M3 — Full Front PPF (SunTek UltraBarrier Pro)', before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
  { category: 'PPF', label: 'Porsche 911 — Front End Package', before: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', after: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80' },
  { category: 'PPF', label: 'Tesla Model 3 — Track Package', before: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', after: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80' },
  { category: 'Ceramic', label: 'Range Rover — Ceramic Elite (Paint Correction + 2-Layer Coat)', before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', after: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80' },
  { category: 'Ceramic', label: 'Mercedes C-Class — Ceramic Protection Package', before: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80', after: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&q=80' },
  { category: 'Automotive Tint', label: 'Toyota Hilux — Full Car + Windscreen (Solar Gard VTX PRO)', before: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', after: 'https://images.unsplash.com/photo-1562141961-b8bc81614208?w=800&q=80' },
  { category: 'Automotive Tint', label: 'Ford Ranger — Rear Privacy (Solar Gard)', before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
  { category: 'Residential Tint', label: 'Acacia Ridge — West-Facing Living Room (3M Solar Comfort)', before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', after: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80' },
  { category: 'Residential Tint', label: 'Sunnybank — Whole Home (3M Privacy + Solar Mix)', before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', after: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80' },
  { category: 'Commercial Tint', label: 'Milton — Office Fitout, 3 Floors (3M Solar Film)', before: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { category: 'Commercial Tint', label: 'Woolloongabba — Retail Shopfront (3M Safety + Solar)', before: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', after: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { category: 'PPF', label: 'Lamborghini Urus — Full Wrap (SunTek Matte)', before: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', after: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80' },
];

const CATEGORIES: Category[] = ['All', 'PPF', 'Ceramic', 'Automotive Tint', 'Residential Tint', 'Commercial Tint'];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('All');
  const filtered = active === 'All' ? gallery : gallery.filter(g => g.category === active);

  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 'var(--section-padding-x)', paddingRight: 'var(--section-padding-x)', background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Before &amp; After</p>
          <h1 className="font-display" style={{ fontSize: 'var(--size-h1)', lineHeight: 1, marginBottom: 24 }}>Gallery</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
            Every job is a case study in prep, precision, and product. Drag the handle to see the before and after on each installation.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 0 }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{ padding: '8px 18px', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 2, cursor: 'pointer', transition: 'all 0.2s', background: active === c ? 'var(--color-accent)' : 'transparent', color: active === c ? '#FFFFFF' : 'var(--color-text-secondary)', border: `1px solid ${active === c ? 'var(--color-accent)' : 'var(--color-border)'}` }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px var(--section-padding-x) 80px', background: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 20 }}>
            {filtered.map((item, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <BeforeAfterSlider before={item.before} after={item.after} alt={item.label} height={260} />
                <div style={{ padding: '16px 20px 18px' }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 600 }}>{item.category}</span>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 6, lineHeight: 1.5 }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: '60px 0' }}>No gallery items found for this category.</p>
          )}
        </div>
      </section>

      <CTABlock service="Protection Package" defaultService="Other" />
    </>
  );
}
