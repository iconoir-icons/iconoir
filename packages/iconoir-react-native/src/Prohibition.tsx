import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProhibition(
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
        d="M19.141 5A9.97 9.97 0 0012 2C6.477 2 2 6.477 2 12a9.968 9.968 0 002.859 7M19.14 5A9.967 9.967 0 0122 12c0 5.523-4.477 10-10 10a9.97 9.97 0 01-7.141-3M19.14 5L4.86 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProhibition);
export default ForwardRef;
