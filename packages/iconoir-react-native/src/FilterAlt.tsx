import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilterAlt(
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
        d="M3 7V4a1 1 0 011-1h16a1 1 0 011 1v3M3 7l6.65 5.7a1 1 0 01.35.76v6.26a1 1 0 001.242.97l2-.5a1 1 0 00.758-.97v-5.76a1 1 0 01.35-.76L21 7M3 7h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilterAlt);
export default ForwardRef;
