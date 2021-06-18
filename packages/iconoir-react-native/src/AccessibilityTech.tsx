import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAccessibilityTech(
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
        d="M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <Path
        d="M9.72 11.786a3 3 0 103.576 4.646M12 14h2.5l1 1.5h1M12 9.5V11m0 3v-3m0 0h2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 7.5a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAccessibilityTech);
export default ForwardRef;
