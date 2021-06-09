import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCropRotateBl(
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
        d="M5.5 12v4a4 4 0 004 4h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14.5L5.5 12 8 14.5M11.5 4v8a1 1 0 001 1h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 15V7a1 1 0 00-1-1h-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCropRotateBl);
export default ForwardRef;
