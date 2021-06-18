import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEaseOutControlPoint(
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
        d="M3 20S13 4 21 4M7 4a2 2 0 11-4 0 2 2 0 014 0zm0 0h2M14 4h-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEaseOutControlPoint);
export default ForwardRef;
