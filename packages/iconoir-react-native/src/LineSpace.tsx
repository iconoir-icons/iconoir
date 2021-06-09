import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLineSpace(
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
        d="M11 7h9M11 12h9M11 17h9M6 17V7m0 10l-2-2.5M6 17l2-2.5M6 7L4 9m2-2l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLineSpace);
export default ForwardRef;
