import styled from 'styled-components';

export const Table = styled.table`
  display: block;
  overflow-x: auto;
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  td,
  th {
    padding: 14px 20px 14px 0;
    border-bottom: 1px solid var(--line);
    font-size: 15px;
    line-height: 1.5;
    color: var(--text);
    text-align: left;
    vertical-align: top;
  }
  thead td,
  thead th {
    padding-top: 0;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--mono-ink);
  }
  tbody td:first-child {
    color: var(--black);
    font-weight: 500;
  }
`;
