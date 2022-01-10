import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgKeyframeAlignVertical(
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
        d="M15.7 12.375l-3.231 4.04a.6.6 0 01-.938 0L8.3 12.374a.6.6 0 010-.75l3.231-4.04a.6.6 0 01.938 0l3.231 4.04a.6.6 0 010 .75zM12 22v-2M12 4V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyframeAlignVertical);
export default ForwardRef;
