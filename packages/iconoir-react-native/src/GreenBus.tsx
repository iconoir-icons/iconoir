import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgGreenBus(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M7 16.01l.01-.011M21 12H3v7a1 1 0 001 1h9M17 23s.9-3.118 3-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.802 21.424l-.134.013a3.094 3.094 0 01-3.366-2.774 3.06 3.06 0 012.761-3.35l2.986-.28a.35.35 0 01.381.314l.255 2.58a3.194 3.194 0 01-2.883 3.497zM21 8V6a4 4 0 00-4-4H7a4 4 0 00-4 4v2M7 8h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M4 20h4v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" fill="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGreenBus);
export default ForwardRef;
