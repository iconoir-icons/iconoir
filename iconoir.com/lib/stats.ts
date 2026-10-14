import { downloads as npmDownloads } from '@nodesecure/npm-registry-sdk';
import { REPO } from './constants';
import { octokit } from './octokit';

// Last known values, used when the GitHub or npm API is too slow or fails,
// so a flaky API never blocks a deploy.
const FALLBACK_NUM_STARS = 4580;
const FALLBACK_NUM_DOWNLOADS = 691733;
const FETCH_TIMEOUT_MS = 10_000;

async function withFallback(
  promise: Promise<number | undefined>,
  fallback: number,
  label: string,
): Promise<number> {
  let timer: Parameters<typeof clearTimeout>[0];

  const timeout = new Promise<undefined>((resolve) => {
    timer = setTimeout(resolve, FETCH_TIMEOUT_MS);
  });

  try {
    const value = await Promise.race([promise, timeout]);
    if (value)
      return value;
    console.warn(`Could not fetch ${label} in time, using fallback`);
  } catch (error) {
    console.warn(`Could not fetch ${label}, using fallback`, error);
  } finally {
    clearTimeout(timer);
  }

  return fallback;
}

let numStarsPromise: Promise<number> | undefined;

/** GitHub stars, fetched once per build and shared by every page's header. */
export function getNumStars(): Promise<number> {
  numStarsPromise ??= withFallback(
    octokit.rest.repos
      .get({ ...REPO })
      .then(({ data }) => data.stargazers_count),
    FALLBACK_NUM_STARS,
    'GitHub stars',
  );

  return numStarsPromise;
}

/** Monthly npm downloads of iconoir-react. */
export function getNumDownloads(): Promise<number> {
  return withFallback(
    npmDownloads('iconoir-react', 'last-month').then(
      ({ downloads }) => downloads,
    ),
    FALLBACK_NUM_DOWNLOADS,
    'NPM downloads',
  );
}
