import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFastArrowTop(
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
        d="M15.5 16.5L12 13l-3.5 3.5M15.5 10.5L12 7l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFastArrowTop);
export default ForwardRef;
