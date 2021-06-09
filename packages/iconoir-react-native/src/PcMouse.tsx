import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPcMouse(
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
        d="M12 2v0a8 8 0 018 8v4a8 8 0 01-8 8v0a8 8 0 01-8-8v-4a8 8 0 018-8v0zm0 0v7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPcMouse);
export default ForwardRef;
