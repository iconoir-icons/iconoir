import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgShareIos(
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
        d="M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6M12 15V3m0 0L8.5 6.5M12 3l3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShareIos);
export default ForwardRef;
