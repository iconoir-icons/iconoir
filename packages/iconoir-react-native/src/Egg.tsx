import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEgg(
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
        d="M12 22a8 8 0 008-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 008 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEgg);
export default ForwardRef;
