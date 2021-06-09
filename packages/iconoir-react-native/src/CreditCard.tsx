import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCreditCard(
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
        d="M7 15a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6V9M2 9v9.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V9M2 9h20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCard);
export default ForwardRef;
