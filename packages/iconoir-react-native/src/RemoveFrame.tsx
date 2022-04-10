import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRemoveFrame(
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
        d="M4.998 2H2v2.998h2.998V2zM4.999 3.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998V19zM21.997 2.001H19v2.998h2.998V2.001zM21.997 19.001H19v2.998h2.998v-2.998z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRemoveFrame);
export default ForwardRef;
