import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNoBattery(
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
        d="M3 3l18 18M23 10v4M5.5 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14.5m2.5-3.5V8a2 2 0 00-2-2h-6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNoBattery);
export default ForwardRef;
