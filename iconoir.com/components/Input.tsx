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
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  padding: 6px;
  text-align: center;
  font-size: 13px;
  line-height: 21px;
  font-weight: 500;
  color: var(--black);
  border: solid 1px var(--g6);
  
  &:hover{
    border: solid 2px var(--g0);
  }
  &:focus{
    border: solid 2px var(--g0);
  }
`;

export const LargeInput = styled(Input)`
  height: 60px;
  font-size: 16px;
  line-height: 26px;
  border-radius: 12px;
  padding: 0 23px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: 0.2s;
  &:hover{
    transform: scale(1.02);
  }
`;

export const ColorButton = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='51px' height='51px' stroke-width='2.3' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23000000'%3E%3Cpath d='M7 13.161l5.464-5.464a1 1 0 011.415 0l2.12 2.12a1 1 0 010 1.415l-1.928 1.929m-7.071 0l-2.172 2.172a.999.999 0 00-.218.327l-1.028 2.496c-.508 1.233.725 2.466 1.958 1.959l2.497-1.028c.122-.05.233-.125.326-.218l5.708-5.708m-7.071 0h7.071M13.878 3.454l2.121 2.121m4.243 4.243l-2.121-2.121m-2.122-2.122l1.414-1.414a1 1 0 011.415 0l.707.707a1 1 0 010 1.414L18.12 7.697m-2.122-2.122l2.122 2.122' stroke='%23000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100%;
  right: 20px;
  position: absolute;
  pointer-events: none;
  &:hover{
    transition: 0.2s;
    scale: 1.2;
  }
`;

export const ColorInput = styled.input`
  padding: 0px;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  &::-webkit-color-swatch,
  &::-moz-color-swatch {
    border: none;
  }
  background-color: var(--gray-200);
  opacity:0;
  transition: 0.2s;
  &:hover + ${ColorButton} {
    transition: 0.2s;
    scale: 1.3;
  }
`;