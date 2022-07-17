import React from 'react';
import styled from 'styled-components';
import { Text14 } from './Typography';

export function AvailableFor() {
  return (
    <AvailableForContainer>
      <Text14>Available for</Text14>
      <AvailableForImage
        src={'/react.png'}
        alt={'React Logo'}
        title={'React'}
        larger
      />
      <AvailableForImage
        src={'/flutter.png'}
        alt={'Flutter Logo'}
        title={'Flutter'}
      />
      <AvailableForImage
        src={'/figma.png'}
        alt={'Figma Logo'}
        title={'Figma'}
      />
      <AvailableForImage
        src={'/react-native.png'}
        alt={'React Native Logo'}
        title={'React Native'}
        larger
      />
      <AvailableForImage
        src={'/framer.png'}
        alt={'Framer Logo'}
        title={'Framer'}
      />
      <div>
        <a href={'#'}>
          <Text14>More?</Text14>
        </a>
        <a href={'#'}>
          <Text14>Are you using the library?</Text14>
        </a>
      </div>
    </AvailableForContainer>
  );
}

const AvailableForContainer = styled.div`
  margin: 120px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > :not(:last-child) {
    margin-right: 60px;
  }
`;
const AvailableForImage = styled.img<{ larger?: boolean }>`
  height: ${(props) => (props.larger ? 50 : 30)}px;
  display: block;
`;
