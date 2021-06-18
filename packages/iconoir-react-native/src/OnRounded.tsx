import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgOnRounded(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z"
        stroke="currentColor"
      />
      <Path d="M9 9a3 3 0 110 6 3 3 0 010-6z" stroke="currentColor" />
      <Path
        d="M14 15V9l4 6V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgOnRounded);
export default ForwardRef;
