import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgOffRounded(
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
      <Path d="M7 9a3 3 0 110 6 3 3 0 010-6z" stroke="currentColor" />
      <Path
        d="M12 15V9h3M17 15V9h3M12 12h2.572M17 12h2.572"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgOffRounded);
export default ForwardRef;
