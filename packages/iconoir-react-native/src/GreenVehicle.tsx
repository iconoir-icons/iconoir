import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgGreenVehicle(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M7 10h8M6 14h1M15 14h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 18H2v2.4a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V18zm0 0h7M2 18v-6.59a2 2 0 01.162-.787l2.319-5.41A2 2 0 016.319 4h9.362a2 2 0 011.839 1.212l2.318 5.41a2 2 0 01.162.789V12.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M17 23s.9-3.118 3-5M19.802 21.424l-.134.013a3.094 3.094 0 01-3.366-2.774 3.06 3.06 0 012.761-3.35l2.986-.28a.35.35 0 01.381.314l.255 2.58a3.194 3.194 0 01-2.883 3.497z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGreenVehicle);
export default ForwardRef;
