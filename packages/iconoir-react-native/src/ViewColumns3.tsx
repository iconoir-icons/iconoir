import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgViewColumns3(
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
        d="M9 3H3.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H15m0-18v18"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgViewColumns3);
export default ForwardRef;
