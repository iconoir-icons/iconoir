import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgGoogleOne(
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
        d="M11 5v14a2 2 0 104 0V5a2 2 0 10-4 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.64 3.53L6.747 8.171a2 2 0 002.754 2.901l4.892-4.642a2 2 0 00-2.753-2.902z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGoogleOne);
export default ForwardRef;
