import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgReports(
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
        d="M9 21h6m-6 0v-5m0 5H3.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6H9m6 5V9m0 12h5.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6h-4.8a.6.6 0 00-.6.6V9m0 0H9.6a.6.6 0 00-.6.6V16"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgReports);
export default ForwardRef;
