import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLeaderboard(
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
        d="M15 19H9V8.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6V19zM15 5H9M20.4 19H15v-3.9a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6zM9 19v-5.9a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v5.3a.6.6 0 00.6.6H9z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLeaderboard);
export default ForwardRef;
