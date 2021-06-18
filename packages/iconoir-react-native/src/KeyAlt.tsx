import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgKeyAlt(
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
        d="M10 12a4 4 0 11-8 0 4 4 0 018 0zm0 0h12v3M18 12v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyAlt);
export default ForwardRef;
