import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCropRotateBr(
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
        d="M11.748 18.25h4a4 4 0 004-4v-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.248 20.75l-2.5-2.5 2.5-2.5M3.748 12.25h8a1 1 0 001-1v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.748 5.25h-8a1 1 0 00-1 1v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCropRotateBr);
export default ForwardRef;
