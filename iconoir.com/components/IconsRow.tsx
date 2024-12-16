import type { Icon } from './IconList';
import styled from 'styled-components';
import { ICON_SPACE } from '../lib/constants';
import { Icon as IconC } from './Icon';

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: ${ICON_SPACE}px;
  }
`;

export interface IconsRowProps {
  icons: Icon[];
  style?: any;
  iconWidth: number;
}

export function IconsRow({ icons, style, iconWidth }: IconsRowProps) {
  return (
    <RowContainer style={style}>
      {icons.map((icon) => (
        <IconC iconWidth={iconWidth} icon={icon} key={icon.filename} />
      ))}
    </RowContainer>
  );
}
