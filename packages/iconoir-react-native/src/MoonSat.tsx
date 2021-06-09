import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

function SvgMoonSat(
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
      <Circle cx={12} cy={12} r={10} stroke="currentColor" />
      <Path
        d="M7.633 3.067A3.001 3.001 0 114.017 6.32M22 13.05a3.5 3.5 0 10-3 5.914"
        stroke="currentColor"
      />
      <Path
        d="M14.5 8.51l.01-.011M10 17a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMoonSat);
export default ForwardRef;
