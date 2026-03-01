import { useState, useRef } from 'react';
import { Check, CheckCircle, Loader2 } from 'lucide-react';
import { gsap } from 'gsap';

const SERVICES = [
  'Paint Protection Film (PPF)',
  'Ceramic Coating',
  'Automotive Window Tinting',
  'Residential Window Tinting',
  'Commercial Window Tinting',
];

const PPF_PACKAGES = ['Impact Shield', 'Front End Package', 'Track Package', 'Full Wrap', 'Not sure'];
const CERAMIC_PACKAGES = ['Essential', 'Protection', 'Elite', 'Signature', 'Not sure'];
const PAINT_CONDITIONS = ['Showroom', 'Good', 'Minor swirls', 'Needs correction'];
const TINT_GOALS = ['Privacy', 'Heat rejection', 'UV protection', 'Appearance', 'All'];
const TINT_PACKAGES = ['Rear Privacy', 'Full Car', 'Full Car + Windscreen', 'Not sure'];
const RES_PROP_TYPES = ['Home', 'Apartment'];
const COMM_PROP_TYPES = ['Office', 'Shopfront', 'Warehouse', 'Other'];
const WINDOW_COUNTS = ['1–5', '6–10', '10–20', '20+'];
const RES_GOALS = ['Heat reduction', 'Privacy', 'UV protection', 'Glare reduction', 'All'];
const GLASS_AREAS = ['Under 20sqm', '20–50sqm', '50–100sqm', '100sqm+'];
const COMM_GOALS = ['Heat', 'Privacy', 'UV', 'Security', 'Branding', 'All'];
const REFERRAL_SOURCES = ['Google', 'Instagram', 'Referral', 'Other'];

interface QuoteFormProps {
  defaultService?: string;
}

export default function QuoteForm({ defaultService }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(defaultService || '');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Vehicle / property fields
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [ppfPackage, setPpfPackage] = useState('');
  const [ceramicPackage, setCeramicPackage] = useState('');
  const [paintCondition, setPaintCondition] = useState('');
  const [tintGoal, setTintGoal] = useState('');
  const [tintPackage, setTintPackage] = useState('');
  const [propType, setPropType] = useState('');
  const [windowCount, setWindowCount] = useState('');
  const [resGoal, setResGoal] = useState('');
  const [sqm, setSqm] = useState('');
  const [commGoal, setCommGoal] = useState('');

  // Contact fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [date, setDate] = useState('');
  const [referral, setReferral] = useState('');

  const handleNext = () => {
    if (step < 3) {
      gsap.fromTo(formRef.current, { x: 0, opacity: 1 }, { x: -40, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: () => {
        setStep(s => s + 1);
        gsap.fromTo(formRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power3.out' });
      }});
    }
  };
  const handleBack = () => {
    if (step > 1) {
      gsap.fromTo(formRef.current, { x: 0, opacity: 1 }, { x: 40, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: () => {
        setStep(s => s - 1);
        gsap.fromTo(formRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power3.out' });
      }});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const stepLabel = ['What are you after?', 'Tell us more', 'How do we reach you?'];

  if (submitted) {
    return (
      <div ref={successRef} style={{ textAlign: 'center', padding: '40px 0' }}>
        <CheckCircle size={48} color="var(--color-accent)" style={{ marginBottom: 20 }} />
        <h3 className="font-display" style={{ fontSize: 'var(--size-h2)', marginBottom: 12 }}>We've Got Your Request.</h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 24 }}>
          We'll be in touch within 2 business hours. If it's urgent, call us directly.
        </p>
        <a href="tel:0411164886" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
          0411 164 886
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} role="form" aria-label="Get a Quote" noValidate>
      {/* Progress steps */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 32, alignItems: 'center' }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: s < step ? 'var(--color-accent)' : s === step ? 'var(--color-accent)' : 'var(--color-surface-raised)',
              color: s <= step ? 'var(--color-bg-primary)' : 'var(--color-text-muted)',
              fontSize: 12, fontWeight: 700, flexShrink: 0,
              border: s > step ? '1px solid var(--color-border)' : 'none',
              transition: 'all 250ms ease',
            }}>
              {s < step ? <Check size={14} /> : s}
            </div>
            {s < 3 && <div style={{ width: 24, height: 1, background: s < step ? 'var(--color-accent)' : 'var(--color-border)', transition: 'background 250ms ease' }} />}
          </div>
        ))}
        <span style={{ fontSize: 12, color: 'var(--color-text-muted)', marginLeft: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {stepLabel[step - 1]}
        </span>
      </div>

      <div ref={formRef}>
        {/* Step 1 */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label htmlFor="service">Service Interested In</label>
              <select id="service" value={service} onChange={e => setService(e.target.value)} required aria-required="true">
                <option value="">Select a service…</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {(service === 'Paint Protection Film (PPF)' || service === 'Ceramic Coating' || service === 'Automotive Window Tinting') && (
              <div className="form-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                <div><label htmlFor="make">Vehicle Make</label><input id="make" value={vehicleMake} onChange={e => setVehicleMake(e.target.value)} placeholder="e.g. Toyota" /></div>
                <div><label htmlFor="model">Model</label><input id="model" value={vehicleModel} onChange={e => setVehicleModel(e.target.value)} placeholder="e.g. Camry" /></div>
                <div><label htmlFor="year">Year</label><input id="year" value={vehicleYear} onChange={e => setVehicleYear(e.target.value)} placeholder="e.g. 2023" /></div>
              </div>
            )}

            {service === 'Residential Window Tinting' && (
              <div><label htmlFor="propType">Property Type</label>
                <select id="propType" value={propType} onChange={e => setPropType(e.target.value)}>
                  <option value="">Select…</option>
                  {RES_PROP_TYPES.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            )}

            {service === 'Commercial Window Tinting' && (
              <div><label htmlFor="commPropType">Property Type</label>
                <select id="commPropType" value={propType} onChange={e => setPropType(e.target.value)}>
                  <option value="">Select…</option>
                  {COMM_PROP_TYPES.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {service === 'Paint Protection Film (PPF)' && (
              <div>
                <label htmlFor="ppfPkg">Package Preference</label>
                <select id="ppfPkg" value={ppfPackage} onChange={e => setPpfPackage(e.target.value)}>
                  <option value="">Select…</option>
                  {PPF_PACKAGES.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            )}
            {service === 'Ceramic Coating' && (<>
              <div>
                <label htmlFor="ceramicPkg">Package Preference</label>
                <select id="ceramicPkg" value={ceramicPackage} onChange={e => setCeramicPackage(e.target.value)}>
                  <option value="">Select…</option>
                  {CERAMIC_PACKAGES.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="paintCond">Paint Condition</label>
                <select id="paintCond" value={paintCondition} onChange={e => setPaintCondition(e.target.value)}>
                  <option value="">Select…</option>
                  {PAINT_CONDITIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </>)}
            {service === 'Automotive Window Tinting' && (<>
              <div>
                <label htmlFor="tintGoal">Tint Goal</label>
                <select id="tintGoal" value={tintGoal} onChange={e => setTintGoal(e.target.value)}>
                  <option value="">Select…</option>
                  {TINT_GOALS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="tintPkg">Package Preference</label>
                <select id="tintPkg" value={tintPackage} onChange={e => setTintPackage(e.target.value)}>
                  <option value="">Select…</option>
                  {TINT_PACKAGES.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </>)}
            {service === 'Residential Window Tinting' && (<>
              <div>
                <label htmlFor="winCount">Number of Windows</label>
                <select id="winCount" value={windowCount} onChange={e => setWindowCount(e.target.value)}>
                  <option value="">Select…</option>
                  {WINDOW_COUNTS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="resGoal">Primary Goal</label>
                <select id="resGoal" value={resGoal} onChange={e => setResGoal(e.target.value)}>
                  <option value="">Select…</option>
                  {RES_GOALS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </>)}
            {service === 'Commercial Window Tinting' && (<>
              <div>
                <label htmlFor="sqm">Approximate Glass Area</label>
                <select id="sqm" value={sqm} onChange={e => setSqm(e.target.value)}>
                  <option value="">Select…</option>
                  {GLASS_AREAS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="commGoal">Primary Goal</label>
                <select id="commGoal" value={commGoal} onChange={e => setCommGoal(e.target.value)}>
                  <option value="">Select…</option>
                  {COMM_GOALS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </>)}
            {!service && <p style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>Please select a service in step 1.</p>}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" value={name} onChange={e => setName(e.target.value)} required aria-required="true" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="mobile">Mobile *</label>
                <input id="mobile" type="tel" value={mobile} onChange={e => setMobile(e.target.value)} required aria-required="true" placeholder="04XX XXX XXX" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required aria-required="true" placeholder="your@email.com" />
            </div>
            <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label htmlFor="suburb">Suburb</label>
                <input id="suburb" value={suburb} onChange={e => setSuburb(e.target.value)} placeholder="Your suburb" />
              </div>
              <div>
                <label htmlFor="date">Preferred Date (optional)</label>
                <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="referral">How did you hear about us? (optional)</label>
              <select id="referral" value={referral} onChange={e => setReferral(e.target.value)}>
                <option value="">Select…</option>
                {REFERRAL_SOURCES.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {step > 1 && (
            <button type="button" className="btn-ghost" onClick={handleBack} style={{ padding: '12px 24px' }}>Back</button>
          )}
        </div>
        <div>
          {step < 3 ? (
            <button type="button" className="btn-primary" onClick={handleNext} disabled={step === 1 && !service} style={{ opacity: step === 1 && !service ? 0.5 : 1 }}>
              <span className="btn-slide" />
              <span>Continue</span>
            </button>
          ) : (
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
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}
