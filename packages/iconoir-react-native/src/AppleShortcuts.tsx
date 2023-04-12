import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAppleShortcuts(
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
        clipPath="url(#apple-shortcuts_svg__clip0_3190_17433)"
        stroke="currentColor"
      >
        <Path d="M9.852 14.633l-6.2-3.946a2 2 0 010-3.374l6.2-3.946a4 4 0 014.296 0l6.2 3.946a2 2 0 010 3.374l-6.2 3.946a4 4 0 01-4.296 0z" />
        <Path d="M18.286 12l2.063 1.313a2 2 0 010 3.374l-6.201 3.946a4 4 0 01-4.296 0l-6.2-3.946a2 2 0 010-3.374L5.714 12" />
      </G>
      <Defs>
        <ClipPath id="apple-shortcuts_svg__clip0_3190_17433">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAppleShortcuts);
export default ForwardRef;
