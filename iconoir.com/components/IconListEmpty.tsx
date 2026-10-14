import { ArrowUpRight, SpockHandGesture } from 'iconoir-react';
import styled from 'styled-components';
import { SUGGEST_ICON_LINK } from '../lib/constants';
import { Button } from './Button';
import { CardTitle, Text15 } from './Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  border-radius: 24px;
  background: var(--band);
  text-align: center;
  ${Text15} {
    max-width: 360px;
    margin: 10px 0 28px;
  }
`;

const IconContainer = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
  border-radius: 50%;
  background: var(--black);
  color: var(--white);
  svg {
    width: 28px;
    height: 28px;
  }
`;

export interface IconListEmptyProps {
  searchTerm?: string;
}

export function IconListEmpty({ searchTerm }: IconListEmptyProps) {
  return (
    <Container>
      <IconContainer>
        {/* Explicit color: the explorer's IconoirProvider would paint it black. */}
        <SpockHandGesture color="currentColor" />
      </IconContainer>
      <CardTitle>
        {searchTerm
          ? (
              <>
                No icons for &lsquo;
                {searchTerm}
                &rsquo; yet
              </>
            )
          : 'No icons match these filters yet'}
      </CardTitle>
      <Text15>
        If you can&apos;t find the icon you need, suggest it on GitHub and
        we&apos;ll consider it for a future release.
      </Text15>
      <Button
        as="a"
        href={SUGGEST_ICON_LINK}
        target="_blank"
        rel="noreferrer"
        $size="sm"
      >
        Suggest an icon
        <ArrowUpRight />
      </Button>
    </Container>
  );
}
