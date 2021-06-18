import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBoldSquareOutline(
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
        d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <Path
        d="M12 12H9m3 0s2.5 0 2.5-2.5S12 7 12 7s0 0 0 0H9.6a.6.6 0 00-.6.6V12m3 0s3 0 3 2.75-3 2.75-3 2.75 0 0 0 0H9.6a.6.6 0 01-.6-.6V12"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBoldSquareOutline);
export default ForwardRef;
