interface TrustBadgesProps {
  services?: ('ppf' | 'tint' | 'window' | 'ceramic')[];
}

export default function TrustBadges({ services = ['ppf', 'tint', 'window'] }: TrustBadgesProps) {
  const badges = [
    {
      id: 'ppf',
      label: 'SunTek Authorised',
      sub: 'PPF Installer',
    },
    {
      id: 'ceramic',
      label: 'Ceramic Pro Certified',
      sub: 'Ceramic Coating',
    },
    {
      id: 'tint',
      label: 'Solar Gard VTX PRO',
      sub: 'Certified Installer',
    },
    {
      id: 'window',
      label: '3M Window Films',
      sub: 'Authorised Installer',
    },
  ].filter(b => services.includes(b.id as any));

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'nowrap',
        overflowX: 'auto',
        opacity: 0.85,
        paddingBottom: 4,
      }}
    >
      {badges.map(b => (
        <div
          key={b.id}
          style={{
            flexShrink: 0,
            border: '1px solid var(--color-border-bright)',
            borderRadius: 100,
            padding: '8px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            background: 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
            {b.label}
          </span>
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {b.sub}
          </span>
        </div>
      ))}
    </div>
  );
}
