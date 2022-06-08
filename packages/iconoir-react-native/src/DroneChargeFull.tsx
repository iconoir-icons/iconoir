import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDroneChargeFull(
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
        d="M14.25 14.75l.25-2.25.426-3.834A.6.6 0 0014.33 8H9.67a.6.6 0 00-.596.666l.867 7.8a.6.6 0 00.596.534H11"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M4.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 4.5L9 8M4.5 19.5l5-4M19.5 4.5L15 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 19v2M15 19v2M17 19v2M19 19v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 22.4v-4.8a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-6.8a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDroneChargeFull);
export default ForwardRef;
