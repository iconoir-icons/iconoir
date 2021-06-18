import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLongArrowRightUp1(
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
        d="M15.5 7v6a4 4 0 01-4 4h-7m11-10l3.5 3.5M15.5 7L12 10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLongArrowRightUp1);
export default ForwardRef;
