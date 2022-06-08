import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRoundedMirror(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M20 10v4a8 8 0 11-16 0v-4a8 8 0 1116 0zM17.5 4.5L13 8M19 7l-7.5 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRoundedMirror);
export default ForwardRef;
