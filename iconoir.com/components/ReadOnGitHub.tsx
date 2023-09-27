import { ArrowRight } from 'iconoir-react';
import styled from 'styled-components';
import { DonateContainer, DonateHeader, DonateRight } from '../pages/support';
import { GITHUB_TREE_PREFIX } from '../lib/constants';
import { Text18 } from './Typography';
import { LargeButton } from './Button';

export interface ReadOnGitHubProps {
  path: string;
  resource?: string;
}
export function ReadOnGitHub({
  path,
  resource = 'our documentation',
}: ReadOnGitHubProps) {
  return (
    <DonateContainer style={{ marginTop: 88 }}>
      <div>
        <DonateHeader>Read it on GitHub</DonateHeader>
        <Text18>
          If you prefer, you can take a look at {resource} on our GitHub
          repository.
        </Text18>
      </div>
      <DonateRight>
        <a
          href={`${GITHUB_TREE_PREFIX}/${
            path.startsWith('/') ? path.slice(1) : path
          }`}
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

export const DonateIconButton = styled(LargeButton)`
  &&& {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;
    justify-content: center;
    &::after {
      border-radius: 50%;
    }
  }
`;
