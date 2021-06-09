import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgStyleBorder(
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
        d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6z"
        stroke="currentColor"
        strokeWidth={1.499}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 2"
      />
      <Path
        d="M16 5H8a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3z"
        stroke="currentColor"
        strokeWidth={1.499}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgStyleBorder);
export default ForwardRef;
