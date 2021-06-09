import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCinemaOld(
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
        d="M7 14a2 2 0 100-4 2 2 0 000 4zM17 14a2 2 0 100-4 2 2 0 000 4zM12 9a2 2 0 100-4 2 2 0 000 4zM12 19a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm0 0v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCinemaOld);
export default ForwardRef;
