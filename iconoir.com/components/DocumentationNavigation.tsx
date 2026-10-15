import type { DocumentationItem } from '../lib/docs';
import { NavArrowUp } from 'iconoir-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

const HeaderItemIcon = styled.div<{ $active?: boolean }>`
  display: flex;
  margin-left: auto;
  transition: transform 0.25s;
  transform: rotate(${(props) => (props.$active ? 0 : 180)}deg);
  svg {
    width: 16px;
    height: 16px;
  }
  ${media.lg} {
    display: none;
  }
`;

const ChildrenContainer = styled.div<{ $expanded?: boolean }>`
  display: ${(props) => (props.$expanded ? 'flex' : 'none')};
  flex-direction: column;
  gap: 2px;
  padding-bottom: 8px;
  ${media.lg} {
    display: flex;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 10px 6px;
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  cursor: var(--cursor-pointer);
  &:first-child {
    padding-top: 0;
  }
  ${media.lg} {
    padding: 28px 10px 8px;
    cursor: var(--cursor);
    pointer-events: none;
  }
`;

const NavigationItem = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.3;
  text-decoration: none;
  color: ${(props) => (props.$active ? 'var(--black)' : 'var(--text)')};
  font-weight: ${(props) => (props.$active ? 500 : 400)};
  background: ${(props) => (props.$active ? 'var(--band)' : 'transparent')};
  transition:
    background 0.15s,
    color 0.15s;
  &:hover {
    color: var(--black);
    background: var(--band);
  }
`;

const NavigationItemLabel = styled.span`
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--black);
  color: var(--white);
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
`;

function activeSectionTitles(
  items: DocumentationItem[],
  activePath: string,
  pathPrefix?: string[],
) {
  const normalized = activePath.replace((pathPrefix || []).join('/'), '');

  return items
    .filter((item) => {
      return (
        normalized === item.path
        || item.children?.some((child) => {
          return activePath.startsWith(
            [item.path, child.path].filter(Boolean).join('/'),
          );
        })
      );
    })
    .map((item) => item.title);
}

export interface DocumentationNavigationProps {
  documentationItems: DocumentationItem[];
  pathPrefix?: string[];
}

export function DocumentationNavigation({
  documentationItems,
  pathPrefix,
}: DocumentationNavigationProps) {
  const router = useRouter();
  const activePath = router.asPath.replace('/docs/', '');

  // Derived during render so the server HTML already has the active section
  // open; an effect alone left every section collapsed until hydration.
  const activeTitles = React.useMemo(
    () => activeSectionTitles(documentationItems, activePath, pathPrefix),
    [documentationItems, activePath, pathPrefix],
  );

  const [expandedTitles, setExpandedTitles] = React.useState(activeTitles);
  const activeKey = activeTitles.join('|');

  React.useEffect(() => {
    setExpandedTitles(activeKey ? activeKey.split('|') : []);
  }, [activeKey]);

  return (
    <>
      {documentationItems.map((documentationItem) => {
        const path = [...(pathPrefix || []), documentationItem.path]
          .filter(Boolean)
          .join('/');

        if (documentationItem.children?.length) {
          const active = expandedTitles.includes(documentationItem.title);

          return (
            <React.Fragment key={documentationItem.title}>
              <HeaderItem
                onClick={() => {
                  setExpandedTitles((et) => {
                    const includes = et.includes(documentationItem.title);

                    return includes
                      ? et.filter((i) => i !== documentationItem.title)
                      : [...et, documentationItem.title];
                  });
                }}
              >
                {documentationItem.title}
                <HeaderItemIcon $active={active}>
                  <NavArrowUp />
                </HeaderItemIcon>
              </HeaderItem>
              <ChildrenContainer $expanded={active}>
                <DocumentationNavigation
                  documentationItems={documentationItem.children}
                  pathPrefix={[
                    ...(pathPrefix || []),
                    documentationItem.path,
                  ].filter(Boolean)}
                />
              </ChildrenContainer>
            </React.Fragment>
          );
        } else {
          return (
            <Link
              href={`/docs/${path}`}
              passHref
              legacyBehavior
              key={documentationItem.path}
            >
              <NavigationItem $active={activePath === path}>
                <span>{documentationItem.title}</span>
                {documentationItem.label
                  ? (
                      <NavigationItemLabel>
                        {documentationItem.label}
                      </NavigationItemLabel>
                    )
                  : null}
              </NavigationItem>
            </Link>
          );
        }
      })}
    </>
  );
}
