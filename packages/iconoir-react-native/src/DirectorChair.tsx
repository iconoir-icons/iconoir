import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDirectorChair(
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
        d="M19 12L5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M5 4h14M5 7h14" stroke="currentColor" strokeLinejoin="round" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDirectorChair);
export default ForwardRef;
