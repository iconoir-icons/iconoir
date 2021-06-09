import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSwipeTwoFingersUpGesture(
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
        d="M6.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 0V5m0 0L9 7.4M6.5 5L4 7.4M17.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 0V5m0 0L20 7.4M17.5 5L15 7.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeTwoFingersUpGesture);
export default ForwardRef;
