import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBusStop(
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
        d="M16 16.01l.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6h-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 20v2h2v-2H4zM14 20v2h2v-2h-2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 20H2.6a.6.6 0 01-.6-.6v-6.8a.6.6 0 01.6-.6H16M14 8H6m8-6H6a4 4 0 00-4 4v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBusStop);
export default ForwardRef;
