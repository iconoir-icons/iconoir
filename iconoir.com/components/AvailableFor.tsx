import styled from 'styled-components';
import { LIBRARY_LINKS } from '../lib/constants';
import { media } from '../lib/responsive';
import { Eyebrow } from './Typography';

const Container = styled.div`
  margin-top: 56px;
  text-align: center;
  ${media.sm} {
    margin-top: 72px;
  }
`;

const Libraries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const Library = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 18px 0 12px;
  border-radius: 999px;
  background: var(--gray-btn);
  color: var(--black);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s;
  &:hover {
    background: var(--gray-btn-hover);
  }
`;

const LibraryLogo = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const LIBRARIES = [
  { name: 'React', logo: '/logo-react.svg', href: LIBRARY_LINKS.React },
  {
    name: 'Swift',
    logo: '/logo-swift.svg',
    href: 'https://github.com/iconoir-icons/iconoir#swift-package',
  },
  { name: 'Flutter', logo: '/logo-flutter.svg', href: LIBRARY_LINKS.Flutter },
  { name: 'Figma', logo: '/logo-figma.svg', href: LIBRARY_LINKS.Figma },
  {
    name: 'React Native',
    logo: '/logo-react-native.svg',
    href: LIBRARY_LINKS.ReactNative,
  },
  { name: 'Vue', logo: '/logo-vue.svg', href: LIBRARY_LINKS.Vue },
  { name: 'Framer', logo: '/logo-framer.svg', href: LIBRARY_LINKS.Framer },
];

export function AvailableFor() {
  return (
    <Container>
      <Eyebrow>Available for</Eyebrow>
      <Libraries>
        {LIBRARIES.map((library) => (
          <Library
            key={library.name}
            href={library.href}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <LibraryLogo src={library.logo} alt="" />
            {library.name}
          </Library>
        ))}
      </Libraries>
    </Container>
  );
}
