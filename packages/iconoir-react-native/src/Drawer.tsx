import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDrawer(
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
        d="M21 14H3M3 8h18M11 17h2M11 11h2M11 5h2M21 2.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6zM17.5 20v2M6.5 20v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDrawer);
export default ForwardRef;
