import React from 'react';
import styled from 'styled-components';
import { PraiseItem } from './PraiseItem';
import { media } from './responsive';

const NUM_PRAISE_ITEMS = 3;
export function Praise() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const indicatorContainerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current) {
      const handle = () => {
        if (indicatorContainerRef.current && containerRef.current) {
          const currentScrollLeft = containerRef.current.scrollLeft;
          const totalScroll = containerRef.current.scrollWidth;
          const interval = totalScroll / NUM_PRAISE_ITEMS;
          const currentIndex =
            currentScrollLeft >=
            containerRef.current.scrollWidth - window.innerWidth - 100
              ? indicatorContainerRef.current.children.length - 1
              : Math.round(currentScrollLeft / interval);
          for (
            let i = 0;
            i < indicatorContainerRef.current.children.length;
            i++
          ) {
            const child = indicatorContainerRef.current.children[i];
            if (currentIndex === i) {
              child.classList.add('active');
            } else {
              child.classList.remove('active');
            }
          }
        }
      };
      const element = containerRef.current;
      element.addEventListener('scroll', handle);
      return () => {
        element.removeEventListener('scroll', handle);
      };
    }
  }, []);
  return (
    <>
      <Container ref={containerRef}>
        <PraiseItem
          name={'Riccardo Suardi'}
          position={'Nibol CEO'}
          description={
            <>
              Blandit viverra torquent eget pellentesque nulla maecenas rhoncus
              rutrum placerat ipsum integer phasellus diam facilisi magnis
              dapibus penatibus varius ut.
            </>
          }
          imageUrl={'./riccardo-suardi.png'}
          logoUrl={'./nibol-logo.png'}
          logoAlt={'Nibol Logo'}
        />
        <PraiseItem
          name={'Fabrizio Rinaldi'}
          position={'Mailbrew and Typefully founder'}
          description={
            <>
              Blandit viverra torquent eget pellentesque nulla maecenas rhoncus
              rutrum placerat ipsum integer phasellus diam facilisi magnis
              dapibus penatibus varius ut.
            </>
          }
          imageUrl={'./fabrizio-rinaldi.png'}
          logoUrl={'./mailbrew-logo.png'}
          logoAlt={'Mailbrew Logo'}
        />
        <PraiseItem
          name={'Chris Messina'}
          position={'Entrepreneur and # inventor'}
          description={
            <>
              Blandit viverra torquent eget pellentesque nulla maecenas rhoncus
              rutrum placerat ipsum integer phasellus diam facilisi magnis
              dapibus penatibus varius ut.
            </>
          }
          imageUrl={'./chris-messina.png'}
          logoUrl={'./twitter-logo.png'}
          logoAlt={'Twitter Logo'}
        />
      </Container>
      <IndicatorContainer ref={indicatorContainerRef}>
        <Indicator className={'active'} />
        <Indicator />
        <Indicator />
      </IndicatorContainer>
    </>
  );
}

const Container = styled.div`
  max-width: 100%;
  margin: 0 -30px;
  padding: 0 30px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  > :not(:last-child) {
    margin-right: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  > :last-child {
    padding-right: 30px;
  }

  ${media.xl} {
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow-x: visible;
    > :not(:last-child) {
      margin-right: 48px;
    }
    > :last-child {
      padding-right: 0;
    }
  }
`;
const Indicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gray);
  transition: background 0.25s linear;
  &.active {
    background: var(--black);
  }
`;
const IndicatorContainer = styled.div`
  margin: 40px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > :not(:last-child) {
    margin-right: 14px;
  }
  ${media.xl} {
    display: none;
  }
`;
