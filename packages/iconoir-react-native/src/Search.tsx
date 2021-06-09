import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSearch(
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
        d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSearch);
export default ForwardRef;
