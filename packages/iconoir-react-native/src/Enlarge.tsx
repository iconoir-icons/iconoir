import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEnlarge(
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
        d="M15 9l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEnlarge);
export default ForwardRef;
