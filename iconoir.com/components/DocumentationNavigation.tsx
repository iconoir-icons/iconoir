import { NavArrowUp } from 'iconoir-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { DocumentationItem } from '../pages/docs/[...slug]';
import { media } from '../lib/responsive';

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
  const [expandedTitles, setExpandedTitles] = React.useState<string[]>([]);
  React.useEffect(() => {
    const expandedItems = documentationItems.filter((item) => {
      const normalized = activePath.replace((pathPrefix || []).join('/'), '');
      return (
        normalized === item.path ||
        item.children?.some((child) => {
          return activePath.startsWith(
            [item.path, child.path].filter(Boolean).join('/')
          );
        })
      );
    });
    setExpandedTitles(expandedItems.map((item) => item.title));
  }, [activePath, pathPrefix, documentationItems]);
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
                <HeaderItemIcon active={active}>
                  <NavArrowUp />
                </HeaderItemIcon>
                {documentationItem.title}
              </HeaderItem>
              <ChildrenContainer expanded={active}>
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
              <NavigationItem as={'a'} active={activePath === path}>
                <span>{documentationItem.title}</span>
                {documentationItem.label ? (
                  <NavigationItemLabel>
                    {documentationItem.label}
                  </NavigationItemLabel>
                ) : null}
              </NavigationItem>
            </Link>
          );
        }
      })}
    </>
  );
}

const HeaderItemIcon = styled.div<{ active?: boolean }>`
  font-size: 13px;
  transition: transform 0.25s linear;
  transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  margin-right: 7px;
  position: relative;
  top: 6px;
  svg {
    display: block;
  }
  ${media.lg} {
    display: none;
  }
`;
const ChildrenContainer = styled.div<{ expanded?: boolean }>`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  ${media.lg} {
    display: block;
  }
`;
const HeaderItem = styled.div`
  padding: 10px 30px;
  font-size: 15px;
  line-height: 19px;
  color: var(--g0);
  font-weight: 700;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  ${media.lg} {
    padding: 22px 45px;
    cursor: default;
    pointer-events: none;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;
const NavigationItem = styled.div<{ active?: boolean }>`
  padding: 12px 45px 12px 75px;
  transition: background 0.1s linear, color 0.1s linear;
  font-weight: 500;
  font-size: 16px;
  line-height: 14.5px;
  letter-spacing: -0.02em;
  color: var(--g1);
  display: flex;
  align-items: center;
  text-decoration: none;
  span {
    font-weight: 500;
  }
  > :not(:last-child) {
    margin-right: 14px;
  }
  &:hover,
  ${(props) => (props.active ? '&' : '&.noop')} {
    color: var(--g0);
    text-decoration: underline;
  }
  ${(props) => (props.active ? 'span' : '&.noop')} {
    font-weight: 700;
  }
  ${media.lg} {
    padding: 12px 45px 12px 65px;
  }
`;
const NavigationItemLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  line-height: 17.6px;
  font-weight: 700!important;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--g1);
  background: var(--g5);
`;
