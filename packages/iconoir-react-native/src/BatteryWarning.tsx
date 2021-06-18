import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBatteryWarning(
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
        d="M23 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 16V8a2 2 0 012-2h15a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <Path
        d="M10.5 9v2M10.5 15.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBatteryWarning);
export default ForwardRef;
