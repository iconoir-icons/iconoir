import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCylinder(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3zM12 16c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3z"
        stroke="currentColor"
      />
      <Path
        d="M20 5v14M4 5v14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCylinder);
export default ForwardRef;
