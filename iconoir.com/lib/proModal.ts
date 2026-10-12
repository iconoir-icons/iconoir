const EVENT = 'iconoir:icon-used';
const COUNT_COOKIE = 'proModalCount';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
// After the first showing, the modal comes back every this many icon uses.
const SHOW_EVERY = 10;

export interface IconUseDetail {
  iconComponentName: string;
  filename: string;
}

function readCount() {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${COUNT_COOKIE}=(\\d+)`),
  );

  return match ? Number(match[1]) : 0;
}

function writeCount(count: number) {
  document.cookie = `${COUNT_COOKIE}=${count}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
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
  writeCount(count);

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
