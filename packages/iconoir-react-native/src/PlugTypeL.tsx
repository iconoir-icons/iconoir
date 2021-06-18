import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlugTypeL(
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
        d="M10 3H5.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H10M11 7h2M11 12h2M11 17h2M14 3h4.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlugTypeL);
export default ForwardRef;
