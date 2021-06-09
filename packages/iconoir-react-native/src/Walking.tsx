import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWalking(
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
        d="M12.44 9.127l-1.408 5.635 4.93 6.339M10.328 18.284L8.215 21.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.215 13.353c0-3.944 2.817-4.226 4.226-4.226h1.408c.235 1.174 1.268 3.663 3.522 4.226M13 7a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWalking);
export default ForwardRef;
