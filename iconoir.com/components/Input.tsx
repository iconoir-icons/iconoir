import styled from 'styled-components';

const ResetInput = styled.input`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
  -webkit-appearance: none;
  border: none;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='51px' height='51px' stroke-width='2.3' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23000000'%3E%3Cpath d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243' stroke='%23000000' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px;
  }
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
  cursor: pointer;
  &::-webkit-color-swatch,
  &::-moz-color-swatch {
    border: none;
  }
`;
