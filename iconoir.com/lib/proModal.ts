const EVENT = 'iconoir:icon-used';
const COUNT_COOKIE = 'proModalCount';
const VARIANT_COOKIE = 'proModalVariant';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
// After the first showing, the modal comes back every this many icon uses.
const SHOW_EVERY = 10;

export interface IconUseDetail {
  iconComponentName: string;
  filename: string;
}

export const PRO_MODAL_VARIANTS = ['a', 'b'] as const;
export type ProModalVariant = (typeof PRO_MODAL_VARIANTS)[number];

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : undefined;
}

function writeCookie(name: string, value: string | number) {
  document.cookie = `${name}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

function readCount() {
  return Number(readCookie(COUNT_COOKIE)) || 0;
}

/**
 * The copy variant this visitor sees in the modal for the A/B test. Picked at
 * random on first call and kept in a cookie so it stays the same across visits.
 */
export function getProModalVariant(): ProModalVariant {
  const stored = readCookie(VARIANT_COOKIE);
  if (PRO_MODAL_VARIANTS.includes(stored as ProModalVariant))
    return stored as ProModalVariant;

  const variant
    = PRO_MODAL_VARIANTS[Math.floor(Math.random() * PRO_MODAL_VARIANTS.length)];

  writeCookie(VARIANT_COOKIE, variant);
  return variant;
}

/**
 * Called when an icon is downloaded or its SVG copied. Opens the Iconoir Pro
 * modal on the first use, then again every `SHOW_EVERY` uses, counted in a
 * cookie so it carries across visits.
 */
export function notifyIconUsed(detail: IconUseDetail) {
  if (typeof window === 'undefined')
    return;

  const count = readCount() + 1;
  writeCookie(COUNT_COOKIE, count);

  if ((count - 1) % SHOW_EVERY !== 0)
    return;

  // Let the browser start the download before the modal takes focus.
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent(EVENT, { detail }));
  }, 300);
}

export function onIconUsed(listener: (detail: IconUseDetail) => void) {
  const handler = (event: Event) =>
    listener((event as CustomEvent<IconUseDetail>).detail);

  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
