import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFootball(
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
        d="M12 13.828V21M5 3v10.828h14V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 6.732c1.071-.618 1.434-2.114 1.549-2.833a.505.505 0 00-.321-.556c-.68-.26-2.157-.693-3.228-.075C9.93 3.886 9.567 5.38 9.452 6.1a.505.505 0 00.32.556c.681.26 2.158.693 3.228.075z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFootball);
export default ForwardRef;
