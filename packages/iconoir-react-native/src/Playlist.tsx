import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlaylist(
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
        d="M2 11h14M2 17h11M2 5h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
      />
      <Path
        d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0v-7.9a.6.6 0 01.6-.6H22"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlaylist);
export default ForwardRef;
