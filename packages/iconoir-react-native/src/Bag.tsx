import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBag(
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
        d="M4.508 20h14.984a.6.6 0 00.592-.501l1.8-10.8A.6.6 0 0021.292 8H2.708a.6.6 0 00-.592.699l1.8 10.8a.6.6 0 00.592.501z"
        stroke="currentColor"
      />
      <Path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBag);
export default ForwardRef;
