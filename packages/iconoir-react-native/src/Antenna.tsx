import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAntenna(
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
        d="M12 5a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 1s1.5 1 1.5 3S16 7 16 7M8 1S6.5 2 6.5 4 8 7 8 7M7 23l1.111-4M17 23l-1.111-4M14.5 14L12 5l-2.5 9m5 0h-5m5 0l1.389 5M9.5 14l-1.389 5m0 0h7.778"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAntenna);
export default ForwardRef;
