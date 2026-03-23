import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export interface MobileAccordionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function MobileAccordion({ title, icon, children, defaultOpen = false }: MobileAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      {/* Mobile: accordion */}
      <div className="mobile-accordion-wrapper">
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 16px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: open ? '12px 12px 0 0' : 12,
            cursor: 'pointer',
            minHeight: 44,
            transition: 'border-radius 200ms ease',
          }}
        >
          {icon && <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{icon}</span>}
          <span style={{ flex: 1, textAlign: 'left', fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</span>
          <ChevronDown
            size={16}
            style={{ flexShrink: 0, transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'none', color: 'var(--color-text-muted)' }}
          />
        </button>
        <div
          style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 250ms ease',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              padding: '16px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderTop: 'none',
              borderRadius: '0 0 12px 12px',
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: render children directly */}
      <div className="mobile-accordion-desktop">
        {children}
      </div>
    </>
  );
}
