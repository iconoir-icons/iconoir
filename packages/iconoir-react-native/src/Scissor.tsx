import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgScissor(
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
        d="M7.236 7a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L20 18M7.236 17a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L20 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgScissor);
export default ForwardRef;
