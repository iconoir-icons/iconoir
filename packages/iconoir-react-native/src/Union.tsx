import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgUnion(
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
        d="M15 9h5.4a.6.6 0 01.6.6v10.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 9V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v10.8a.6.6 0 00.6.6H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgUnion);
export default ForwardRef;
