import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransitionBottom(
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
        d="M18 2H6a3 3 0 00-3 3v2a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3z"
        stroke="currentColor"
      />
      <Path
        d="M3 16v2a4 4 0 004 4h10a4 4 0 004-4v-2M12 10v8m0 0l-3-3m3 3l3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransitionBottom);
export default ForwardRef;
