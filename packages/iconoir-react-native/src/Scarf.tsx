import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgScarf(
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
        d="M15 11H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v16M18 21v-2M15 3v18M15 7H3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgScarf);
export default ForwardRef;
