import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDashboard(
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
        d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8 1.343 3.2 3 3.2 3-1.433 3-3.2z"
        stroke="currentColor"
      />
      <Path
        d="M12 4v4M3.5 7.5l3 3M17.5 10.5l3-3M2 17h4M18 17h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDashboard);
export default ForwardRef;
