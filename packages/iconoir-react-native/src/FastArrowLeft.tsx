import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFastArrowLeft(
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
        d="M16.5 8L13 11.5l3.5 3.5M10.5 8L7 11.5l3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFastArrowLeft);
export default ForwardRef;
