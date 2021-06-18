import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSortUp(
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
        d="M14 14H2M10 10H2M6 6H2M18 18H2M19 14V4m0 0l3 3m-3-3l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSortUp);
export default ForwardRef;
