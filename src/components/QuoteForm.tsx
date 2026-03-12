import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { pushGtmEvent, fireGadsConversion } from '../lib/gtm';

interface QuoteFormProps {
  defaultService?: string;
}

function FieldError({ msg }: { msg: string }) {
  return <p style={{ color: '#c0392b', fontSize: 12, marginTop: 4 }}>{msg}</p>;
}

export default function QuoteForm({ defaultService: _defaultService }: QuoteFormProps) {
  void _defaultService;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [referral, setReferral] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!mobile.trim()) errs.mobile = 'Mobile is required.';
    else if (mobile.replace(/\D/g, '').length < 10) errs.mobile = 'Enter a valid Australian mobile number.';
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      pushGtmEvent('quote_form_submit', {
        form_name: 'get_a_quote',
        service_context: _defaultService || 'general',
        page_path: window.location.pathname,
        page_title: document.title,
      });
      // GA4 recommended event
      pushGtmEvent('generate_lead', {
        currency: 'AUD',
        value: 0,
      });
      // Google Ads — Request Quote conversion
      fireGadsConversion('AW-17891058826/XXuyCKLXpIYcEIrJj9NC');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'ads_conversion_Request_quote_1');
      }
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <CheckCircle size={48} color="var(--color-accent)" style={{ marginBottom: 20 }} />
        <h3 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 12 }}>We've Got Your Request.</h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 24 }}>
          We'll be in touch within 2 business hours. If it's urgent, call us directly.
        </p>
        <a href="tel:0468810666" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
          0468 810 666
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} role="form" aria-label="Get a Quote" noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label htmlFor="fullName">Name *</label>
            <input id="fullName" value={name} onChange={e => setName(e.target.value)} aria-required="true" aria-invalid={!!errors.name} placeholder="Your name" />
            {errors.name && <FieldError msg={errors.name} />}
          </div>
          <div>
            <label htmlFor="mobile">Mobile *</label>
            <input id="mobile" type="tel" value={mobile} onChange={e => setMobile(e.target.value)} aria-required="true" aria-invalid={!!errors.mobile} placeholder="04XX XXX XXX" />
            {errors.mobile && <FieldError msg={errors.mobile} />}
          </div>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} aria-required="true" aria-invalid={!!errors.email} placeholder="your@email.com" />
          {errors.email && <FieldError msg={errors.email} />}
        </div>
        <div>
          <label htmlFor="carModel">Car Model</label>
          <input id="carModel" value={carModel} onChange={e => setCarModel(e.target.value)} placeholder="e.g. 2024 Toyota Camry" />
        </div>
        <div>
          <label htmlFor="inquiry">Inquiry</label>
          <textarea id="inquiry" rows={4} value={inquiry} onChange={e => setInquiry(e.target.value)} placeholder="Tell us what you're after — service, coverage, any questions…" style={{ resize: 'vertical' }} />
        </div>
        <div>
          <label htmlFor="referral">How did you hear about us?</label>
          <select id="referral" value={referral} onChange={e => setReferral(e.target.value)}>
            <option value="">Select…</option>
            {['Google', 'Instagram', 'Facebook', 'Referral', 'Other'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <button type="submit" className="btn-primary" disabled={loading} style={{ minWidth: 160, justifyContent: 'center' }}>
          <span className="btn-slide" />
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
              <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Processing…
            </span>
          ) : (
            <span>Get My Quote</span>
          )}
        </button>
      </div>
    </form>
  );
}
