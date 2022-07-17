import React from 'react';
import { Icon as IconType } from './IconList';
import styled from 'styled-components';
import * as AllIcons from 'iconoir-react';

export interface IconProps {
  iconWidth: number;
  icon: IconType;
}
export function Icon({ iconWidth, icon }: IconProps) {
  const IconComponent = (AllIcons as any)[icon.iconComponentName];
  return (
    <div>
      <BorderContainer iconWidth={iconWidth}>
        <IconContainer>
          <IconComponent />
        </IconContainer>
      </BorderContainer>
      <Subtitle>{icon.filename}</Subtitle>
    </div>
  );
}

const BorderContainer = styled.div<{ iconWidth: number }>`
  width: ${(props) => props.iconWidth}px;
  box-sizing: border-box;
  padding-bottom: 100%;
  position: relative;
  border: solid 1px var(--light-gray);
  border-radius: 12px;
  margin-bottom: 10px;
`;
const IconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Subtitle = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 14.74px;
  color: var(--black-40);
  text-align: center;
`;
