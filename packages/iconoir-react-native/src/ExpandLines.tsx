import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgExpandLines(
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
        d="M18 2H6M18 22H6M12 14v5m0 0l3-3m-3 3l-3-3M12 10V5m0 0l3 3m-3-3L9 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgExpandLines);
export default ForwardRef;
