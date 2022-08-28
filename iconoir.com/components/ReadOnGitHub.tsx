import { ArrowRight } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import {
  DonateButton,
  DonateContainer,
  DonateHeader,
  DonateRight,
} from '../pages/support';
import { FILE_PREFIX } from './constants';
import { Text18 } from './Typography';

export interface ReadOnGitHubProps {
  path: string;
}
export function ReadOnGitHub({ path }: ReadOnGitHubProps) {
  return (
    <DonateContainer style={{ marginTop: 88 }}>
      <div>
        <DonateHeader>Read it on GitHub</DonateHeader>
        <Text18>
          If you prefer, you can take a look at our documentation on our Github
          repository.
        </Text18>
      </div>
      <DonateRight>
        <a
          href={`${FILE_PREFIX}/${path.startsWith('/') ? path.slice(1) : path}`}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <DonateIconButton>
            <ArrowRight />
          </DonateIconButton>
        </a>
      </DonateRight>
    </DonateContainer>
  );
}

export const DonateIconButton = styled(DonateButton)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
  justify-content: center;
  &::after {
    border-radius: 50%;
  }
`;
