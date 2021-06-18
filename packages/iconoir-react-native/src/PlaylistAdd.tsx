import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlaylistAdd(
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
        d="M18 18h2m2 0h-2m0 0v-2m0 2v2M2 11h18M2 17h12M2 5h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlaylistAdd);
export default ForwardRef;
