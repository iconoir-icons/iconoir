import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgScanning(
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
        d="M6 3H3v3M2 12h20M9 19v-4M12 16v-1M15 17v-2M12 21v-3M18 3h3v3M6 21H3v-3M18 21h3v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgScanning);
export default ForwardRef;
