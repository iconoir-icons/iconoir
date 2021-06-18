import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgChocolate(
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
        d="M19 6.5c-3 0-4.5-.5-4.5-3.5H5v18h14V6.5zM19 15H5M5 9h14M12 21V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgChocolate);
export default ForwardRef;
