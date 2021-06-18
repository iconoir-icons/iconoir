import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAppleImac2021Side(
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
        d="M6 22h2m6 0H8m0 0l2-8.5m0 0L7 2m3 11.5l1.5 5.5M17 22h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAppleImac2021Side);
export default ForwardRef;
