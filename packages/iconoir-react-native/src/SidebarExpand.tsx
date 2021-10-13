import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSidebarExpand(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9.5 21V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 10l1.75 2-1.75 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSidebarExpand);
export default ForwardRef;
