import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCrib(
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
        d="M3 5v16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16h18M3 7h18M18 16V7M14 16V7M10 16V7M6 16V7M3 19h18"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <Path
        d="M21 5v16M21 5a1 1 0 100-2 1 1 0 000 2zM3 5a1 1 0 100-2 1 1 0 000 2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCrib);
export default ForwardRef;
