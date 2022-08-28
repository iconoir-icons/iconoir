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
  background: var(--black);
  height: 75px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--white);
  padding: 0 43px;
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
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    inset: 0;
    border: solid 3px var(--black);
    opacity: 0;
    transition: inset 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s linear;
    z-index: 10;
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
