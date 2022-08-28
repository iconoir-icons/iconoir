import styled from 'styled-components';
import { media } from './responsive';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  td,
  th {
    border: solid 2px var(--light-gray);
    font-size: 16px;
    line-height: 25.6px;
    padding: 12px 20px;
    color: var(--black-60);
    ${media.lg} {
      padding: 12px 30px 12px 60px;
    }
  }
  thead td,
  thead th {
    color: var(--black);
    background: var(--lighter-gray);
    font-weight: 700;
    text-align: left;
  }
  tbody tr:nth-child(even) td {
    background: var(--lighter-gray);
  }
`;
