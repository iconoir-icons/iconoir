import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgInternet(
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10M13 2.05S16 6 16 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12M2.63 8.5h18.74"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgInternet);
export default ForwardRef;
