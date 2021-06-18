import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFontSize(
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
        d="M18 21V11m0 10l-2-2.5m2 2.5l2-2.5M18 11l-2 2m2-2l2 2M9 5v12m0 0H7m2 0h2M15 7V5H3v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFontSize);
export default ForwardRef;
