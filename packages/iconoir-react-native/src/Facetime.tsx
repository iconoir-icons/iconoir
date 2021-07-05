import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFacetime(
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
        d="M2 16V8a6 6 0 016-6h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6z"
        stroke="currentColor"
      />
      <Path
        d="M6 13v-2a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <Path
        d="M17.04 9.22l-3.067 2.3a.6.6 0 000 .96l3.067 2.3a.6.6 0 00.96-.48V9.7a.6.6 0 00-.96-.48z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFacetime);
export default ForwardRef;
