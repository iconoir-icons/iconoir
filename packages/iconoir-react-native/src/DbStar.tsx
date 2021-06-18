import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDbStar(
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
        d="M4 6s0-3 7-3 7 3 7 3M4 6s0 3 7 3 7-3 7-3M4 6v6m14-6v6s0 3-7 3-7-3-7-3m7 9c-7 0-7-3-7-3v-6M17.306 17.113l.909-1.927a.312.312 0 01.57 0l.91 1.927 2.032.311c.261.04.365.376.177.568l-1.471 1.5.347 2.118c.044.272-.229.48-.462.351l-1.818-1-1.818 1c-.233.129-.506-.079-.462-.351l.347-2.118-1.47-1.5c-.19-.192-.085-.528.176-.568l2.033-.31z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDbStar);
export default ForwardRef;
