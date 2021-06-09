import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimerOff(
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
        d="M9 2h6M5 7l14 14.5M12 10v4M6.19 8.5a8 8 0 0011.05 11.544M19.42 17A8 8 0 009.21 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimerOff);
export default ForwardRef;
