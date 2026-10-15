import type { Icon } from './IconList';
import styled from 'styled-components';
import { ICON_GAP } from '../lib/constants';
import { Icon as IconC } from './Icon';

const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${ICON_GAP}px;
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
