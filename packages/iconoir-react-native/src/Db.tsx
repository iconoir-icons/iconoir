import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDb(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
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
      <Path d="M5 12v6s0 3 7 3 7-3 7-3v-6" stroke="currentColor" />
      <Path d="M5 6v6s0 3 7 3 7-3 7-3V6" stroke="currentColor" />
      <Path
        d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDb);
export default ForwardRef;
