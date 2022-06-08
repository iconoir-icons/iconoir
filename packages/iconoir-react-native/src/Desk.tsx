import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDesk(
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
        d="M4 7v10M1 7h22M4 10h16M14 14h6M20 7v10M14 7v10M17 10v1M17 14v1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDesk);
export default ForwardRef;
