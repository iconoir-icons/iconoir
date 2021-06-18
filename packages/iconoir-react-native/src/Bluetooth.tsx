import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBluetooth(
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
        d="M6.75 8l10.5 8.5-5.5 5.5V2l5.5 5.5L6.75 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBluetooth);
export default ForwardRef;
