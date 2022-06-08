import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgCleanWater(
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
      <G
        clipPath="url(#clean-water_svg__clip0_2032_8261)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13 21.57A8.132 8.132 0 016.25 7.75l5.326-5.326a.6.6 0 01.848 0L17.75 7.75A8.131 8.131 0 0119.74 16M16 20l2 2 4-4" />
      </G>
      <Defs>
        <ClipPath id="clean-water_svg__clip0_2032_8261">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCleanWater);
export default ForwardRef;
