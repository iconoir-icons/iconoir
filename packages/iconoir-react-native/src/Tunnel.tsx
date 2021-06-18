import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTunnel(
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
        d="M20 20H4v-5m16 5v-8a8 8 0 10-16 0v3m16 5L4 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 9v1M12 8v1M8 7v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTunnel);
export default ForwardRef;
