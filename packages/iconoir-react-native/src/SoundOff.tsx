import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSoundOff(
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
        d="M17 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14v-4a1 1 0 011-1h2.697a1 1 0 00.555-.168l4.193-2.796A1 1 0 0113 6.87V17.13a1 1 0 01-1.555.832l-4.193-2.795A1 1 0 006.697 15H4a1 1 0 01-1-1z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSoundOff);
export default ForwardRef;
