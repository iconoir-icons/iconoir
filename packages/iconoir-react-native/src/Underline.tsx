import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgUnderline(
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
        d="M16 5v6a4 4 0 01-4 4v0a4 4 0 01-4-4V5M6 19h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgUnderline);
export default ForwardRef;
