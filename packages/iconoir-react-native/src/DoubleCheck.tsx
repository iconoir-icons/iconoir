import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDoubleCheck(
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
        d="M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M7 12l4.576 4.576a.6.6 0 00.848 0L22 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDoubleCheck);
export default ForwardRef;
