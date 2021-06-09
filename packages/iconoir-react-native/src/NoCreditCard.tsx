import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNoCreditCard(
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
        d="M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 19H2.6a.6.6 0 01-.6-.6V9h6.5M2 9V5.6a.6.6 0 01.6-.6h1.9M14 9h8v8M22 9V5.6a.6.6 0 00-.6-.6H10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNoCreditCard);
export default ForwardRef;
