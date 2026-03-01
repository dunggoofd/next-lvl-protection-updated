import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PackageTier {
  name: string;
  subtitle: string;
  inclusions: string[];
  price: string;
  recommended?: boolean;
}

interface PackageVisualizerProps {
  tiers: PackageTier[];
  diagramType?: 'car' | 'house' | 'building';
}

// Simple SVG car diagram for automotive services
function CarDiagram({ activeTier }: { activeTier: string }) {
  const isFull = activeTier.toLowerCase().includes('full wrap') || activeTier.toLowerCase().includes('signature');
  const accentFill = 'rgba(184, 188, 196, 0.18)';
  const accentStroke = '#B8BCC4';

  return (
    <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 420, height: 'auto' }} aria-label="Vehicle diagram showing protected zones">
      {/* Car body outline */}
      <rect x="30" y="90" width="360" height="70" rx="8" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      {/* Roof */}
      <path d="M110 90 L130 40 L290 40 L310 90 Z" fill={isFull || activeTier.toLowerCase().includes('track') ? accentFill : '#171719'} stroke={isFull || activeTier.toLowerCase().includes('track') ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Bonnet */}
      <path d="M30 90 L80 60 L130 90 Z" fill={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentFill : '#171719'} stroke={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Front bumper */}
      <rect x="30" y="100" width="40" height="25" rx="4" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      {/* Rear bumper */}
      <rect x="350" y="100" width="40" height="25" rx="4" fill={isFull ? accentFill : '#171719'} stroke={isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Front guards */}
      <rect x="70" y="85" width="60" height="35" rx="2" fill={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentFill : '#171719'} stroke={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Rear guards */}
      <rect x="290" y="85" width="60" height="35" rx="2" fill={isFull ? accentFill : '#171719'} stroke={isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Headlights */}
      <rect x="34" y="95" width="28" height="12" rx="3" fill={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentFill : '#171719'} stroke={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Mirrors */}
      <ellipse cx="128" cy="92" rx="10" ry="6" fill={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentFill : '#171719'} stroke={activeTier.toLowerCase().includes('front') || activeTier.toLowerCase().includes('track') || isFull ? accentStroke : '#2A2A2E'} strokeWidth="1.5" />
      {/* Wheels */}
      <circle cx="110" cy="162" r="22" fill="#D4D8E2" stroke="#B0B7C8" strokeWidth="2" />
      <circle cx="110" cy="162" r="10" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      <circle cx="310" cy="162" r="22" fill="#D4D8E2" stroke="#B0B7C8" strokeWidth="2" />
      <circle cx="310" cy="162" r="10" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      {/* Windows */}
      <path d="M135 88 L150 48 L270 48 L285 88 Z" fill="rgba(184, 188, 196, 0.06)" stroke="#B0B7C8" strokeWidth="1" />
      {/* Legend */}
      <rect x="30" y="8" width="12" height="12" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      <text x="48" y="19" fill="#8A8A8F" fontSize="11" fontFamily="DM Sans, sans-serif">Protected zone</text>
    </svg>
  );
}

function HouseDiagram() {
  const accentFill = 'rgba(184, 188, 196, 0.18)';
  const accentStroke = '#B8BCC4';
  return (
    <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 420, height: 'auto' }} aria-label="Property diagram">
      {/* House walls */}
      <rect x="60" y="100" width="300" height="110" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      {/* Roof */}
      <path d="M40 100 L210 20 L380 100 Z" fill="#D4D8E2" stroke="#B0B7C8" strokeWidth="1.5" />
      {/* Windows — highlighted */}
      <rect x="80" y="120" width="70" height="55" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      <rect x="175" y="120" width="70" height="55" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      <rect x="270" y="120" width="70" height="55" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      {/* Door */}
      <rect x="170" y="155" width="80" height="55" rx="2" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      {/* Legend */}
      <rect x="60" y="8" width="12" height="12" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      <text x="78" y="19" fill="#8A8A8F" fontSize="11" fontFamily="DM Sans, sans-serif">Protected glass</text>
    </svg>
  );
}

function BuildingDiagram() {
  const accentFill = 'rgba(184, 188, 196, 0.18)';
  const accentStroke = '#B8BCC4';
  return (
    <svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 420, height: 'auto' }} aria-label="Commercial building diagram">
      <rect x="60" y="30" width="300" height="200" fill="#E2E5EC" stroke="#B0B7C8" strokeWidth="1.5" />
      {[0,1,2,3].map(row => [0,1,2].map(col => (
        <rect key={`${row}-${col}`}
          x={80 + col * 95} y={50 + row * 45} width="75" height="30" rx="2"
          fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      )))}
      <rect x="170" y="195" width="80" height="35" rx="2" fill="#D4D8E2" stroke="#B0B7C8" strokeWidth="1.5" />
      <rect x="60" y="8" width="12" height="12" rx="2" fill={accentFill} stroke={accentStroke} strokeWidth="1.5" />
      <text x="78" y="19" fill="#8A8A8F" fontSize="11" fontFamily="DM Sans, sans-serif">Protected glazing</text>
    </svg>
  );
}

export default function PackageVisualizer({ tiers, diagramType = 'car' }: PackageVisualizerProps) {
  const defaultIndex = tiers.findIndex(t => t.recommended) || 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex >= 0 ? defaultIndex : 0);
  const active = tiers[activeIndex];

  return (
    <div>
      {/* Tab rail */}
      <div className="tab-row" style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
        {tiers.map((tier, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-pressed={activeIndex === i}
            style={{
              position: 'relative',
              padding: '10px 20px',
              borderRadius: 4,
              border: activeIndex === i ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
              background: activeIndex === i ? 'var(--color-surface-raised)' : 'transparent',
              color: activeIndex === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 13, fontWeight: 500,
              transition: 'all 200ms ease',
              boxShadow: activeIndex === i ? `0 0 0 1px var(--color-accent)` : 'none',
            }}
          >
            {tier.recommended && (
              <span style={{
                position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--color-accent)', color: 'var(--color-bg-primary)',
                fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>Most Popular</span>
            )}
            {tier.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* Left: details */}
        <div>
          <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'var(--size-h2)', letterSpacing: '0.02em', marginBottom: 4 }}>
            {active.name}
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 24 }}>{active.subtitle}</p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {active.inclusions.map((inc, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{inc}</span>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 20, marginBottom: 20 }}>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 6 }}>Starting From</p>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-accent)', letterSpacing: '0.02em' }}>
              {active.price}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-a-quote" className="btn-primary">
              <span className="btn-slide" />
              <span>Get a Quote</span>
            </Link>
            <a href="tel:0411164886" className="btn-ghost">Call 0411 164 886</a>
          </div>
        </div>

        {/* Right: diagram */}
        <div className="pkg-diagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {diagramType === 'car' && <CarDiagram activeTier={active.name} />}
          {diagramType === 'house' && <HouseDiagram />}
          {diagramType === 'building' && <BuildingDiagram />}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
