import React from 'react';
import styled, { keyframes } from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import { FEEDBACK_LINK, LIBRARY_LINKS, SUGGEST_LIBRARY } from './constants';
import { media } from './responsive';
import { Text14 } from './Typography';

export function AvailableFor() {
  const { ref, width } = useResizeObserver();
  return (
    <>
      <MobileHeader>Available For</MobileHeader>
      <AvailableForOuter>
        <AvailableForContainer contentWidth={width || 0} ref={ref}>
          <DesktopHeader>Available for</DesktopHeader>
          <a href={LIBRARY_LINKS.React} target={'_blank'} rel={'noreferrer'}>
            <AvailableForImage
              src={'/logo-react.svg'}
              alt={'React Logo'}
              title={'React'}
            />
          </a>
          <a href={LIBRARY_LINKS.Flutter} target={'_blank'} rel={'noreferrer'}>
            <AvailableForImage
              src={'/logo-flutter.svg'}
              alt={'Flutter Logo'}
              title={'Flutter'}
            />
          </a>
          <a href={LIBRARY_LINKS.Figma} target={'_blank'} rel={'noreferrer'}>
            <AvailableForImage
              src={'/logo-figma.svg'}
              alt={'Figma Logo'}
              title={'Figma'}
            />
          </a>
          <a
            href={LIBRARY_LINKS.ReactNative}
            target={'_blank'}
            rel={'noreferrer'}
          >
            <AvailableForImage
              src={'/logo-react-native.svg'}
              alt={'React Native Logo'}
              title={'React Native'}
            />
          </a>
          <a href={LIBRARY_LINKS.Framer} target={'_blank'} rel={'noreferrer'}>
            <AvailableForImage
              src={'/logo-framer.svg'}
              alt={'Framer Logo'}
              title={'Framer'}
            />
          </a>
          <AreYouUsing>
            <a href={SUGGEST_LIBRARY} target={'_blank'} rel={'noreferrer'}>
              <Text14>More?</Text14>
            </a>
            <a href={FEEDBACK_LINK} target={'_blank'} rel={'noreferrer'}>
              <Text14>Are you using the library?</Text14>
            </a>
          </AreYouUsing>
        </AvailableForContainer>
      </AvailableForOuter>
    </>
  );
}

const AreYouUsing = styled.div`
  * {
    white-space: nowrap;
  }
`;
const MobileHeader = styled(Text14)`
  display: block;
  margin-top: 5px;
  text-align: center;
  ${media.lg} {
    display: none;
  }
`;
const DesktopHeader = styled(Text14)`
  display: none;
  ${media.lg} {
    display: block;
  }
`;
const AvailableForAnimation = keyframes`
  5% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(calc((var(--content-width) + 60px - 100vw) * -1));
  }
  55% {
    transform: translateX(calc((var(--content-width) + 60px - 100vw) * -1));
  }
  95% {
    transform: translateX(0);
  }
`;
const AvailableForOuter = styled.div`
  max-width: 100vw;
  margin: 16px -30px 70px -30px;
  padding: 0 30px;
  overflow: hidden;
  ${media.lg} {
    margin: 120px auto;
    padding: 0;
  }
`;
const AvailableForContainer = styled.div<{ contentWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  --content-width: ${(props) => props.contentWidth}px;
  ${(props) => (props.contentWidth ? '&' : '&.noop')} {
    animation: ${AvailableForAnimation} 40s cubic-bezier(0.37, 0, 0.63, 1)
      infinite;
  }
  > :not(:last-child) {
    margin-right: 30px;
  }
  ${media.sm} {
    justify-content: center;
    animation: none;
    width: auto;
  }
  ${media.md} {
    > :not(:last-child) {
      margin-right: 60px;
    }
  }
`;
const AvailableForImage = styled.img`
  height: 40px;
  display: block;
  ${media.lg} {
    height: 50px;
  }
`;
