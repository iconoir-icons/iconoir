import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCutAlt(
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
        d="M6.236 8a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L16 16M17 12h1M22 12h1M6.236 16a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L16 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCutAlt);
export default ForwardRef;
