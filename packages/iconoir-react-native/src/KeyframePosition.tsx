import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgKeyframePosition(
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
        d="M14.73 8.36l-2.25 3a.6.6 0 01-.96 0l-2.25-3a.6.6 0 010-.72l2.25-3a.6.6 0 01.96 0l2.25 3a.6.6 0 010 .72zM3 20h18m-9-3v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyframePosition);
export default ForwardRef;
