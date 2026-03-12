type GtmEventPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    __nextLvlPhoneTrackingBound?: boolean;
  }
}

export function pushGtmEvent(event: string, payload: GtmEventPayload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function initPhoneCtaTracking() {
  if (window.__nextLvlPhoneTrackingBound) return;

  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const anchor = target?.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const telHref = anchor.getAttribute('href') || '';
    const phoneNumber = telHref.replace('tel:', '').trim();
    const ctaText = (anchor.textContent || '').trim() || anchor.getAttribute('aria-label') || 'phone_cta';

    pushGtmEvent('phone_call_cta_click', {
      phone_number: phoneNumber,
      cta_text: ctaText,
      cta_href: telHref,
      page_path: window.location.pathname,
      page_title: document.title,
    });
    // GA4 recommended event
    pushGtmEvent('contact', {
      method: 'phone',
    });
  });

  window.__nextLvlPhoneTrackingBound = true;
}
