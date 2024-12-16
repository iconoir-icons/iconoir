import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`;

export interface HeaderSecondaryProps {
  children: React.ReactElement;
}

export function HeaderSecondary({ children }: HeaderSecondaryProps) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
