import { PeaceHand } from 'iconoir-react';
import styled from 'styled-components';
import {
  DISCORD_LINK,
  GITHUB_LINK,
  ISSUE_LINK,
  LICENSE_LINK,
  PRIVACY_LINK,
  SHARE_LINK,
  SUPPORT_LINK,
} from '../lib/constants';
import { media } from '../lib/responsive';
import { Logo, LogoContainer, LogoIcon } from './Header';
import { Wrap } from './Layout';
import { Eyebrow, Mono } from './Typography';

const Container = styled.footer`
  padding: 72px 0 40px;
  ${media.sm} {
    padding: 96px 0 48px;
  }
`;

const Top = styled.div`
  display: grid;
  gap: 40px;
  ${media.md} {
    grid-template-columns: 1.4fr repeat(3, 1fr);
    gap: 32px;
  }
`;

const About = styled.div`
  max-width: 340px;
  > ${Mono} {
    display: block;
    margin-top: 20px;
    line-height: 1.6;
  }
  a {
    color: var(--black);
    text-underline-offset: 2px;
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 16px;
  ${media.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.md} {
    display: contents;
  }
  /* Like the header nav: hovering a link fades all the others. */
  &:has(a:hover) a:not(:hover) {
    opacity: 0.4;
  }
`;

const FooterCategoryLink = styled.a`
  display: block;
  width: fit-content;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--black);
  text-decoration: none;
  transition: opacity 0.15s;
`;

const FooterEnd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 72px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  ${media.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    color: var(--black);
  }
`;

interface FooterCategoryProps {
  category: string;
  links: { name: string; url: string }[];
}

function FooterCategory({ category, links }: FooterCategoryProps) {
  return (
    <div>
      <Eyebrow>{category}</Eyebrow>
      {links.map((link) => (
        <FooterCategoryLink key={link.url} href={link.url}>
          {link.name}
        </FooterCategoryLink>
      ))}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Wrap>
        <Top>
          <About>
            <LogoContainer href="/" aria-label="Iconoir home">
              <LogoIcon>
                <PeaceHand />
              </LogoIcon>
              <Logo src="/iconoir-logo.svg" alt="Iconoir" />
            </LogoContainer>
            <Mono>
              Iconoir is free and open source under the MIT license. No
              premium options, no email sign-up. A passion project by
              {' '}
              <a href="https://lucaburgio.com" target="_blank" rel="noreferrer">
                Luca Burgio
              </a>
              .
            </Mono>
          </About>
          <Categories>
            <FooterCategory
              category="Project"
              links={[
                { name: 'Our mission', url: '/support' },
                { name: 'Contribute', url: '/docs/contributing' },
                { name: 'Donate', url: SUPPORT_LINK },
                { name: 'Share on X', url: SHARE_LINK },
              ]}
            />
            <FooterCategory
              category="Support"
              links={[
                { name: 'FAQ', url: '/docs/faq' },
                { name: 'License', url: LICENSE_LINK },
                { name: 'GitHub repository', url: GITHUB_LINK },
                { name: 'File a request', url: ISSUE_LINK },
                { name: 'Discord', url: DISCORD_LINK },
              ]}
            />
            <FooterCategory
              category="Developers"
              links={[
                { name: 'Changelog', url: '/docs/changelog' },
                {
                  name: 'React and React Native',
                  url: '/docs/packages/iconoir-react',
                },
                { name: 'Flutter', url: '/docs/packages/iconoir-flutter' },
                { name: 'Framer and Figma', url: '/docs/packages/framer' },
                { name: 'CSS', url: '/docs/packages/css' },
              ]}
            />
          </Categories>
        </Top>
        <FooterEnd>
          <Mono>
            &copy; 2020–
            {year}
            {' '}
            Iconoir contributors. Content available under the
            {' '}
            <a href={LICENSE_LINK} target="_blank" rel="nofollow noreferrer">
              MIT License
            </a>
            .
          </Mono>
          <Mono>
            <a href={PRIVACY_LINK} target="_blank" rel="nofollow noreferrer">
              Privacy
            </a>
          </Mono>
        </FooterEnd>
      </Wrap>
    </Container>
  );
}
