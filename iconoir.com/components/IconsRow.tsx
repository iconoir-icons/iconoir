import styled from 'styled-components';
import { ICON_SPACE } from './constants';
import { Icon as IconC } from './Icon';
import { Icon } from './IconList';

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

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: ${ICON_SPACE}px;
  }
`;
