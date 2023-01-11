import { ArrowRight } from 'iconoir-react';
import { DonateContainer, DonateHeader, DonateRight } from '../pages/support';
import { SUGGEST_LIBRARY_LINK } from '../lib/constants';
import { DonateIconButton } from './ReadOnGitHub';
import { Text18 } from './Typography';

export function SuggestLibrary() {
  return (
    <DonateContainer style={{ marginTop: 88 }}>
      <div>
        <DonateHeader>More?</DonateHeader>
        <Text18>
          If you would like to use Iconoir on a different library or if you want
          to contribute to support a new library, open a feature request in our
          official GitHub repository.
        </Text18>
      </div>
      <DonateRight>
        <a href={SUGGEST_LIBRARY_LINK} target={'_blank'} rel={'noreferrer'}>
          <DonateIconButton>
            <ArrowRight />
          </DonateIconButton>
        </a>
      </DonateRight>
    </DonateContainer>
  );
}
