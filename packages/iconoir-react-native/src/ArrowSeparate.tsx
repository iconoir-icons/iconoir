import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgArrowSeparate(
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
        d="M9.5 8L6 11.5 9.5 15M14 8l3.5 3.5L14 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowSeparate);
export default ForwardRef;
