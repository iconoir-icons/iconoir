import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgGas(
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
        d="M9 8a3 3 0 013-3v0a3 3 0 013 3v13.4a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6V8zM9 11h6M12 5V2m0 0h-1m1 0h1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGas);
export default ForwardRef;
