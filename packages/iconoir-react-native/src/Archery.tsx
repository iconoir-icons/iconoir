import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgArchery(
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
        d="M7 12h11M7 12l-2-2H1l2 2-2 2h4l2-2zm11 0l-2-2m2 2l-2 2M17.5 22c3.038 0 5.5-4.477 5.5-10S20.538 2 17.5 2 12 6.477 12 12s2.462 10 5.5 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgArchery);
export default ForwardRef;
