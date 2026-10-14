import styled, { css } from 'styled-components';

export const ResetButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  text-transform: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none;
`;

export type ButtonVariant = 'primary' | 'secondary' | 'inverted';

const VARIANTS: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: var(--black);
    color: var(--white);
    &:hover {
      background: #2a2a2a;
    }
  `,
  secondary: css`
    background: var(--gray-btn);
    color: var(--black);
    &:hover {
      background: var(--gray-btn-hover);
    }
  `,
  // For use on the dark card.
  inverted: css`
    background: var(--white);
    color: var(--black);
    &:hover {
      background: var(--gray-btn);
    }
  `,
};

/** Pill button from the pro.iconoir.com design system. */
export const Button = styled(ResetButton)<{
  $variant?: ButtonVariant;
  $size?: 'sm' | 'md';
  $icon?: boolean;
}>`
  &&& {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 50px;
    padding: 0 24px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.012em;
    text-decoration: none;
    white-space: nowrap;
    transition:
      background 0.15s,
      transform 0.15s;
    ${(props) => VARIANTS[props.$variant || 'primary']}
    ${(props) =>
      props.$size === 'sm'
      && css`
        height: 40px;
        padding: 0 18px;
        font-size: 14px;
      `}
    ${(props) =>
      props.$icon
      && css`
        width: ${props.$size === 'sm' ? 40 : 50}px;
        padding: 0;
      `}
    svg {
      width: 20px;
      height: 20px;
      flex: none;
    }
    &:active {
      transform: scale(0.98);
    }
    &:focus-visible {
      outline: 2px solid var(--black);
      outline-offset: 3px;
    }
  }
`;

export const CopyButton = styled(ResetButton)`
  &&& {
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 12px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    background: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    color: var(--black);
    font-family: var(--font);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
    &:hover {
      background: var(--gray-btn);
    }
  }
`;
