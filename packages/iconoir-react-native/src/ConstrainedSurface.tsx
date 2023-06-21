import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgConstrainedSurface(
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
        clipPath="url(#constrained-surface_svg__clip0_3628_20527)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 23a2 2 0 110-4 2 2 0 010 4zM21 23a2 2 0 110-4 2 2 0 010 4zM3 5a2 2 0 110-4 2 2 0 010 4zM21 5a2 2 0 110-4 2 2 0 010 4zM13 12c0-1.246-1.159-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438.188.041.38.062.572.062" />
        <Path d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.848 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.651 2.651 0 00-.572-.062M21 19V5M3 19V5M5 3h14M5 21h14" />
      </G>
      <Defs>
        <ClipPath id="constrained-surface_svg__clip0_3628_20527">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgConstrainedSurface);
export default ForwardRef;
