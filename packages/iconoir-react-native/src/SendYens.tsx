import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSendYens(
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
        d="M13 12h8m0 0l-3.84-4M21 12l-3.84 4M3 13h8M3 7l4 5.5M11 7l-4 5.5m0 0V18M3 15h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSendYens);
export default ForwardRef;
