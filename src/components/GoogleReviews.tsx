import { Star } from 'lucide-react';

interface Review {
  name: string;
  suburb: string;
  service: string;
  text: string;
}

interface GoogleReviewsProps {
  reviews: Review[];
  googleUrl: string;
}

export default function GoogleReviews({ reviews, googleUrl }: GoogleReviewsProps) {
  return (
    <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.02em', marginBottom: 8 }}>What Our Customers Say</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, marginBottom: 0 }}>Real Google reviews from real clients</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 32,
        }}>
          {reviews.slice(0, 3).map((r, i) => (
            <div key={i} className="card" style={{ padding: '28px 24px', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 18, fontSize: 15 }}>
                  "{r.text}"
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', fontSize: 14 }}>{r.name}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 12, marginTop: 2 }}>
                  {r.suburb} · {r.service}
                </p>
              </div>
            </div>
          ))}
          {/* 4th card as Google reviews button */}
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              padding: '28px 24px',
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: 'var(--color-text-primary)',
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              transition: 'border-color 0.2s, background 0.2s',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} fill="#FBBF24" color="#FBBF24" />
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>See Our Reviews</div>
              <div style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>on Google</div>
            </div>
          </a>
        </div>
        {/* ...existing code... (button now in card grid) */}
      </div>
    </section>
  );
}
