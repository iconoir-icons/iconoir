import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPriorityHighSolid(
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
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <G clipPath="url(#priority-high-solid_svg__clip0_3839_8159)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.045.893a1.35 1.35 0 011.91 0l10.151 10.152a1.35 1.35 0 010 1.91l-10.151 10.15a1.35 1.35 0 01-1.91 0L.894 12.956a1.35 1.35 0 010-1.91L11.045.893zM12 7.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zm.568 9.25a.75.75 0 00-1.115-1.003l-.01.011a.75.75 0 001.114 1.004l.01-.011z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="priority-high-solid_svg__clip0_3839_8159">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPriorityHighSolid);
export default ForwardRef;
