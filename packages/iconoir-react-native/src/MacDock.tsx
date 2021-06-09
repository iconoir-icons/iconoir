import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMacDock(
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
        d="M8 17a.5.5 0 110-1 .5.5 0 010 1zM12 17a.5.5 0 110-1 .5.5 0 010 1zM16 17a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1zM2 17.5l2-1M22 17.5l-2-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMacDock);
export default ForwardRef;
