import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFastArrowDown(
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
        d="M15.5 7L12 10.5 8.5 7M15.5 13L12 16.5 8.5 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFastArrowDown);
export default ForwardRef;
