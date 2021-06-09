import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSwipeLeftGesture(
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
        d="M10 12a6 6 0 1012 0 6 6 0 00-12 0zm0 0H2m0 0l3-3m-3 3l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeLeftGesture);
export default ForwardRef;
