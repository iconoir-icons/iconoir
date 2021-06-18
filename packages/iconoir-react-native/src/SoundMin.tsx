import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSoundMin(
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
        d="M7 14v-4a1 1 0 011-1h2.697a1 1 0 00.555-.168l4.193-2.796A1 1 0 0117 6.87V17.13a1 1 0 01-1.555.832l-4.193-2.795a1 1 0 00-.555-.168H8a1 1 0 01-1-1z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSoundMin);
export default ForwardRef;
