import { PeaceHand } from 'iconoir-react';
import styled from 'styled-components';
import {
  GITHUB_LINK,
  ISSUE_LINK,
  LICENSE_LINK,
  PRIVACY_LINK,
  SUPPORT_LINK,
} from '../lib/constants';
import { Logo, LogoContainer, LogoIcon } from './Header';
import { Text13, Text17 } from './Typography';

export interface FooterCategoryProps {
  category: string;
  links: { name: string; url: string }[];
}
function FooterCategory({ category, links }: FooterCategoryProps) {
  return (
    <FooterCategoryContainer>
      <FooterCategoryTitle>{category}</FooterCategoryTitle>
      <FooterCategoryLinks>
        {links.map((link) => (
          <FooterCategoryLink key={link.url} href={link.url}>
            {link.name}
          </FooterCategoryLink>
        ))}
      </FooterCategoryLinks>
    </FooterCategoryContainer>
  );
}
export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon>
          <PeaceHand />
        </LogoIcon>
        <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
      </LogoContainer>
      <FooterCategories>
        <FooterCategory
          category={'Project'}
          links={[
            { name: 'Our Mission', url: '/support' },
            { name: 'Contribute', url: '/docs/contributing' },
            {
              name: 'Donate',
              url: SUPPORT_LINK,
            },
          ]}
        />
        <FooterCategory
          category={'Support'}
          links={[
            {
              name: 'License',
              url: LICENSE_LINK,
            },
            {
              name: 'GitHub Repository',
              url: GITHUB_LINK,
            },
            {
              name: 'File a Request',
              url: ISSUE_LINK,
            },
          ]}
        />
        <FooterCategory
          category={'Developers'}
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
      </FooterCategories>
      <FooterEnd>
        <Text13 style={{ fontWeight: 400 }}>
          Parts of this content are &copy;2020-2023 by individual Iconoir
          contributors. Content available under a{' '}
          <a href={LICENSE_LINK} target={'_blank'} rel={'noreferrer'}>
            MIT License
          </a>
          .
        </Text13>
        <Text13 style={{ fontWeight: 400 }}>
          <a href={PRIVACY_LINK} target={'_blank'} rel={'noreferrer'}>
            Privacy
          </a>
        </Text13>
      </FooterEnd>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  margin-top: 110px;
  padding-top: 30px;
  margin-top: 100px;
  padding: 84px 12%;
  background-color: var(--g7);
  align-items: center;
  > :not(:last-child) {
    margin-right: 50px;
  }
`;
const FooterEnd = styled.div`
  border-top: 1px solid var(--g5);
  padding-top: 20px;
  margin-top: 74px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FooterCategories = styled.div`
  width: 100%;
  margin-top: 54px;
  display: flex;
`;
const FooterCategoryContainer = styled.div`
  width: 28%;
  margin-right: 20px;
`;
const FooterCategoryTitle = styled(Text17)`
  &&& {
    margin-bottom: 24px;
    font-weight: 600;
    display: block;
    color: var(--g0);
  }
`;
const FooterCategoryLinks = styled.div``;
const FooterCategoryLink = styled.a`
  display: block;
  font-size: 17px;
  color: var(--g1);
  width: fit-content;
  margin-bottom: 12px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: var(--g0);
  }
`;
