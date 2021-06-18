import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBounceRight(
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
        d="M19 7a2 2 0 110-4 2 2 0 010 4zM4 15.5c3-1 5.5-.5 8 4.5.5-3 2-7.5 3.5-10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBounceRight);
export default ForwardRef;
