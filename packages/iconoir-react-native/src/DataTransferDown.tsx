import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDataTransferDown(
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
        d="M17 20v-1M17 15v-1M7 4v16m0 0l-3-3m3 3l3-3M17 10V4m0 0l-3 3m3-3l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDataTransferDown);
export default ForwardRef;
