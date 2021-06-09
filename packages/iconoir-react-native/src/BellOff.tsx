import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBellOff(
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
        d="M6.27 6.5C6.093 7.11 6 7.75 6 8.4 6 15.867 3 18 3 18h15M7.757 3.875C8.883 2.675 10.41 2 12 2c1.591 0 3.117.674 4.243 1.875C17.368 5.075 18 6.703 18 8.4c0 7.467 3 9.6 3 9.6M13.73 21a1.999 1.999 0 01-3.46 0M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBellOff);
export default ForwardRef;
