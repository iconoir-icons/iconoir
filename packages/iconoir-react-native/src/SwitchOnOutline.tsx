import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSwitchOnOutline(
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
        d="M17 13a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M17 17H7A5 5 0 017 7h10a5 5 0 010 10z" stroke="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwitchOnOutline);
export default ForwardRef;
