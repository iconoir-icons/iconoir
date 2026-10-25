import type { DocumentationItem } from './docs';
import { parseFaq } from './docs';
import { getAllIcons } from './getIcons';

export const DEFAULT_DOCS_DESCRIPTION = 'Our documentation to start using our free icons on React, React Native, Vue, Figma, and more.';

/** A docs item's search title and description, with `{count}` filled in. Build time only. */
export async function getSeoProps(item: DocumentationItem) {
  const count = new Intl.NumberFormat('en-US').format((await getAllIcons()).length);
  const fill = (text?: string) => text?.replaceAll('{count}', count) ?? null;

  return {
    seoTitle: fill(item.seoTitle),
    seoDescription: fill(item.seoDescription),
  };
}

/** schema.org FAQPage data for a FAQ docs page. */
export function faqJsonLd(source: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': parseFaq(source).map(({ question, answer }) => ({
      '@type': 'Question',
      'name': question,
      'acceptedAnswer': { '@type': 'Answer', 'text': answer },
    })),
  };
}
