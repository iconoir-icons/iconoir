import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDashboardSpeed(
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
        d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 23a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDashboardSpeed);
export default ForwardRef;
