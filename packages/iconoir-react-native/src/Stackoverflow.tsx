import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgStackoverflow(
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
        d="M19 15v6H5v-6M16 17H8M15.913 14.663L8.087 13M16.713 12.38L9.463 9M18.173 10.642L12.044 5.5M20.034 8.804L15.109 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgStackoverflow);
export default ForwardRef;
