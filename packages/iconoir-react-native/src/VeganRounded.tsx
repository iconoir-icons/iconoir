import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVeganRounded(
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
        d="M14.5 11.5C12.75 13.382 11 18 11 18s-2.5-6.5-5-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.015 7.73l.297 3.08c.192 1.998-1.306 3.777-3.304 3.97-1.96.188-3.736-1.245-3.925-3.205a3.566 3.566 0 013.208-3.892l3.284-.316a.404.404 0 01.44.363z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVeganRounded);
export default ForwardRef;
