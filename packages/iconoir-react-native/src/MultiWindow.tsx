import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMultiWindow(
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
        d="M7 19v-8a2 2 0 012-2h11a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <Path
        d="M6.5 16H4a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v3"
        stroke="currentColor"
      />
      <Path
        d="M10 12h1M5 7h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMultiWindow);
export default ForwardRef;
