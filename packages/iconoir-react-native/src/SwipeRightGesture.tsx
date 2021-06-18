import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSwipeRightGesture(
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
        d="M14 12a6 6 0 11-12 0 6 6 0 0112 0zm0 0h8m0 0l-3-3m3 3l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeRightGesture);
export default ForwardRef;
