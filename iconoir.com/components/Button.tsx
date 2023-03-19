import styled from 'styled-components';

export const ResetButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
`;

export const LargeButton = styled(ResetButton)`
  background: var(--white);
  height: 75px;
  border-radius: 10px 50px 50px 50px;
  border: solid 2px var(--g0);

  box-shadow: 0px 8px 0px 0px var(--g0);

  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--g0);
  padding: 0 70px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  z-index: 12;
  > :not(:last-child) {
    margin-right: 15px;
  }
  * {
    font-weight: 700;
  }
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 3px 0px 0px var(--g0);
    transform: translateY(5px);
  }
  &:focus::after,
  &:hover::after {
    inset: -7px;
    opacity: 1;
  }
`;

export const Button = styled(LargeButton)`
  height: 40px;
  font-size: 13px;
  line-height: 21px;
  padding: 0 18px;
  &::after {
    border-width: 2px;
  }
  &:focus::after,
  &:hover::after {
    inset: -4px;
  }
  &:active {
    background: var(--darker-gray);
  }
`;

export const CopyButton = styled(Button)`
  text-transform: uppercase;
  background: var(--white);
  height: 30px;
  padding: 0 12px;
  font-size: 11px;
  letter-spacing: 0.12em;
  line-height: 17.6px;
  font-weight: 700;
  color: var(--black);
  font-family: var(--font-family) !important;
`;