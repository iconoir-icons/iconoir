import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDroneCheck(
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
        d="M13.463 17h-2.926a.6.6 0 01-.596-.534l-.867-7.8A.6.6 0 019.67 8h4.66a.6.6 0 01.596.666l-.867 7.8a.6.6 0 01-.596.534z"
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
        d="M4.5 4.5L9 8M4.5 19.5l5-4M19.5 4.5L15 8M14.5 15.5l1.25 1"
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
        d="M16 20l2 2 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDroneCheck);
export default ForwardRef;
