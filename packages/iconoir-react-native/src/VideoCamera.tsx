import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVideoCamera(
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
        d="M15 12v4.4a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6V12zm0 0l5.016-4.18a.6.6 0 01.984.461v7.438a.6.6 0 01-.984.46L15 12z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVideoCamera);
export default ForwardRef;
