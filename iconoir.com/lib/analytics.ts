declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends an event to Google Analytics via the gtag snippet loaded in `GA.tsx`.
 * No-ops on the server, and when gtag was blocked or has not loaded yet.
 */
export function trackEvent(
  action: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function')
    return;

  window.gtag('event', action, params);
}
