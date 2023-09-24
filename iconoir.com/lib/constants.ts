export const REPO = {
  owner: 'iconoir-icons',
  repo: 'iconoir',
} as const;

export const GITHUB_LINK =
  `https://github.com/${REPO.owner}/${REPO.repo}` as const;
export const ISSUE_LINK = `${GITHUB_LINK}/issues/new/choose` as const;
export const SUGGEST_ICON_LINK =
  `${GITHUB_LINK}/issues/new?assignees=lucaburgio&labels=icon+request&template=icon_request.md&title=%5BICON%5D` as const;
export const LICENSE_LINK = `${GITHUB_LINK}/blob/main/LICENSE` as const;
export const SUGGEST_LIBRARY_LINK =
  `${GITHUB_LINK}/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFEAT%5D` as const;

export const GITHUB_TREE_PREFIX = `${GITHUB_LINK}/tree/main` as const;
export const LIBRARY_LINKS = {
  React: `${GITHUB_TREE_PREFIX}/packages/iconoir-react`,
  ReactNative: `${GITHUB_TREE_PREFIX}/packages/iconoir-react-native`,
  Flutter: `${GITHUB_TREE_PREFIX}/packages/iconoir-flutter`,
  Framer: 'https://framer.com/',
  Figma: 'https://www.figma.com/community/file/983248991460488027/Iconoir-Pack',
} as const;

export const SHARE_LINK =
  'https://twitter.com/intent/tweet?text=Check%20out%20Iconoir%20by%20%40burgioluca%20and%20the%20amazing%20team%20with%20%40therealsammarks%20%F0%9F%94%A5&url=https%3A%2F%2Ficonoir.com' as const;
export const SUPPORT_LINK =
  'https://opencollective.com/iconoir/donate' as const;
export const DISCORD_LINK = 'https://discord.gg/c3uzjx6k' as const;
export const FEEDBACK_LINK = 'https://forms.gle/3HvwVYow7D6T8zad7' as const;
export const PRIVACY_LINK =
  'https://www.freeprivacypolicy.com/live/ba00d743-a0cd-44f8-8cb5-6f58911db0fb' as const;

export const AUTHOR_LINKS = {
  Luca: 'https://twitter.com/burgioluca',
  Sam: 'https://twitter.com/therealsammarks',
} as const;

export const ICON_WIDTH = 140 as const;
export const ICON_SPACE = 20 as const;
