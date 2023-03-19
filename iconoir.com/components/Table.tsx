import styled from 'styled-components';
import { media } from '../lib/responsive';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  td,
  th {
    border: solid 2px var(--g6);
    font-size: 16px;
    line-height: 25.6px;
    padding: 12px 20px;
    color: var(--g1);
    ${media.lg} {
      padding: 12px 30px 12px 60px;
    }
  }
  thead td,
  thead th {
    color: var(--g0);
    background: var(--g7);
    font-weight: 700;
    text-align: left;
  }
  tbody tr:nth-child(even) td {
    background: var(--g7);
  }
`;
