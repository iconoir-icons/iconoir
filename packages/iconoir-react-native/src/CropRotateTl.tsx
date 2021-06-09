import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCropRotateTl(
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
        d="M11.746 5.75h-4a4 4 0 00-4 4v1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.246 3.25l2.5 2.5-2.5 2.5M19.746 11.75h-8a1 1 0 00-1 1v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.746 18.75h8a1 1 0 001-1v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCropRotateTl);
export default ForwardRef;
