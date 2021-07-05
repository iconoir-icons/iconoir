import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgStroller(
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
      <G
        clipPath="url(#stroller_svg__clip0)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M11.5 3a8.5 8.5 0 00-7.212 13M18.712 16A8.46 8.46 0 0020 11.5v-2h2.5M8 21a2 2 0 110-4 2 2 0 010 4zM15 21a2 2 0 110-4 2 2 0 010 4zM11.5 3v9M3.5 12h16" />
      </G>
      <Defs>
        <ClipPath id="stroller_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgStroller);
export default ForwardRef;
