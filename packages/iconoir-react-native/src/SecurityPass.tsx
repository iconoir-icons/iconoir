import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSecurityPass(
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
        d="M9 11l3 3 8-8M20 12a8 8 0 11-5.3-7.533"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSecurityPass);
export default ForwardRef;
