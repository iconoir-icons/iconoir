import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAntennaSignal(
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
        d="M17.5 8S19 9.5 19 12s-1.5 4-1.5 4M20.5 5S23 7.5 23 12s-2.5 7-2.5 7M6.5 8S5 9.5 5 12s1.5 4 1.5 4M3.5 5S1 7.5 1 12s2.5 7 2.5 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAntennaSignal);
export default ForwardRef;
