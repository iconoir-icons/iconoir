import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgOilIndustry(
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
        d="M18 10c0-1-1-2-3-2h-1a3 3 0 01-3-3V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 10.8C9 9.033 6 6 6 6s-3 3.033-3 4.8S4.343 14 6 14s3-1.433 3-3.2z"
        stroke="currentColor"
      />
      <Path
        d="M18 21h3v-9h-3v4.5m0 4.5v-4.5m0 4.5h-7.5v-4.5l4-2.5 3.5 2.5M21 10c0-6-4-6-4-6s4 .5 4-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgOilIndustry);
export default ForwardRef;
