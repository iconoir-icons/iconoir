import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPauseWindow(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M16 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v9"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M19 17v5M22 17v5M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPauseWindow);
export default ForwardRef;
