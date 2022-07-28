import styled from 'styled-components';

const ResetInput = styled.input`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
  -webkit-appearance: button;
  border: none;
`;

export const Input = styled(ResetInput)`
  min-height: 35px;
  background: var(--super-light-gray);
  border: 1px solid var(--gray);
  border-radius: 10px;
  overflow: hidden;
  padding: 6px;
  text-align: center;
  font-size: 13px;
  line-height: 21px;
  font-weight: 500;
  color: var(--black);
`;

export const LargeInput = styled(Input)`
  height: 75px;
  font-size: 16px;
  line-height: 26px;
  border-radius: 12px;
  padding: 0 23px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

export const ColorInput = styled(Input)`
  padding: 0px;
  border: none;
  &::-webkit-color-swatch,
  &::-moz-color-swatch {
    border: none;
  }
`;
