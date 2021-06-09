import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFastArrowRight(
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
        d="M7 8l3.5 3.5L7 15M13 8l3.5 3.5L13 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFastArrowRight);
export default ForwardRef;
