import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCubeReplaceFace(
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
        clipPath="url(#cube-replace-face_svg__clip0_3377_18972)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 13.5v5.152a.6.6 0 01-.302.52l-6.4 3.658a.6.6 0 01-.596 0l-6.4-3.657A.6.6 0 015 18.652V13M12 22.5V17M23 8L11 1M13 15L1 8M1 8c3-5 7-2 10-7M13 15c3-5 7-2 10-7" />
      </G>
      <Defs>
        <ClipPath id="cube-replace-face_svg__clip0_3377_18972">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCubeReplaceFace);
export default ForwardRef;
