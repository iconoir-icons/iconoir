import styled from 'styled-components';
import { media } from './responsive';

export const Text15 = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: var(--black-60);
`;

export const Text14 = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: var(--black);
`;

export const Text13 = styled.div`
  font-size: 13px;
  color: var(--dark-gray);
  line-height: 21px;
  font-weight: 500;
`;

export const Text18 = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: var(--black-60);

  ${media.md} {
    font-size: 18px;
    line-height: 29px;
  }
`;
