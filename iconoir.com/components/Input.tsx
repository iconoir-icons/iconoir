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
    cursor: var(--cursor-pointer);
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='51px' height='51px' stroke-width='2.3' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23000000'%3E%3Cpath d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243' stroke='%23000000' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px;
  }
`;

/** `.input` from pro.iconoir.com. */
export const LargeInput = styled(ResetInput)`
  height: 50px;
  width: 100%;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--black);
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  &:hover {
    border-color: #cfcfcf;
  }
  &:focus {
    border-color: var(--black);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }
`;

/** Native color input stretched invisibly over its styled container. */
export const ColorInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  opacity: 0;
  cursor: var(--cursor-pointer);
`;
