import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

function SvgMicWarning(
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
        d="M21 14v4M21 22.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={7} y={2} width={6} height={12} rx={3} stroke="currentColor" />
      <Path
        d="M3 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M10 18v4m0 0H7m3 0h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMicWarning);
export default ForwardRef;
