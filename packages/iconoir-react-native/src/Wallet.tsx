import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWallet(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M19 20H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2z"
        stroke="currentColor"
      />
      <Path
        d="M16.5 14a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 7V5.603a2 2 0 00-2.515-1.932l-11 2.933A2 2 0 003 8.537V9"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWallet);
export default ForwardRef;
