import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDroplet(
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
        d="M19 13.8C19 9.824 12 3 12 3S5 9.824 5 13.8c0 3.976 3.134 7.2 7 7.2s7-3.224 7-7.2z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDroplet);
export default ForwardRef;
