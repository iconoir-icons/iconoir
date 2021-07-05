import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBbq(
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
        d="M8.5 14.5L5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2M12 6s1-1.061 1-2c0-1.333-1-2-1-2M16 6s1-1.061 1-2c0-1.333-1-2-1-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M16.5 17.5h-9" stroke="currentColor" strokeLinejoin="round" />
      <Path
        d="M15.5 14.5l2.1 4.5M18.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15a7 7 0 006.975-6.4.563.563 0 00-.575-.6H5.6a.563.563 0 00-.575.6A7 7 0 0012 15z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBbq);
export default ForwardRef;
