import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRemoveKeyframe(
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
        d="M15 5h6M14.848 13.317l-4.343 4.963a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L7.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRemoveKeyframe);
export default ForwardRef;
