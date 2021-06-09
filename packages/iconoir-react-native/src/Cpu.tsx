import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCpu(
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
        d="M8 15.4V8.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 4.6v14.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6zM17 4V2M12 4V2M7 4V2M7 20v2M12 20v2M17 20v2M20 17h2M20 12h2M20 7h2M4 17H2M4 12H2M4 7H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCpu);
export default ForwardRef;
