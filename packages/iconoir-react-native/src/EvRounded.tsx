import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEvRounded(
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
        d="M18.5 9l-3 6-3-6M10 9H6v6h4M6 12h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V9a6 6 0 016-6h8a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEvRounded);
export default ForwardRef;
