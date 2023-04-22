import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgWaterCheck(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        clipPath="url(#water-check_svg__clip0_2032_8261)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13 21.57A8.132 8.132 0 016.25 7.75l5.326-5.326a.6.6 0 01.848 0L17.75 7.75A8.131 8.131 0 0119.74 16M16 20l2 2 4-4" />
      </G>
      <Defs>
        <ClipPath id="water-check_svg__clip0_2032_8261">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgWaterCheck);
export default ForwardRef;
