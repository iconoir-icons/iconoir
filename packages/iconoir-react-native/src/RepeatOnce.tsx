import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRepeatOnce(
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
        d="M17 17H8c-1.667 0-5-1-5-5M8 7h8c1.667 0 5 1 5 5 0 1.494-.465 2.57-1.135 3.331"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 14.5L17 17l-2.5 2.5M4 8V3L2 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRepeatOnce);
export default ForwardRef;
