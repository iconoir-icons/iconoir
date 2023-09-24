import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAppleShortcutsSolid(
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
      <G
        clipPath="url(#apple-shortcuts-solid_svg__clip0_3786_327)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <Path d="M3.249 11.32c-1.698-1.08-1.698-3.56 0-4.64l6.2-3.946a4.75 4.75 0 015.101 0l6.201 3.946c1.698 1.08 1.698 3.56 0 4.64l-6.2 3.946a4.75 4.75 0 01-5.101 0L3.249 11.32z" />
        <Path d="M19.66 11.986l-5.11-3.252a4.75 4.75 0 00-5.1 0l-5.11 3.252 5.915 3.765a3.25 3.25 0 003.49 0l5.916-3.765zm1.362.889c-.085.07-.175.134-.27.195l-6.202 3.946a4.75 4.75 0 01-5.1 0L3.249 13.07a2.85 2.85 0 01-.27-.195c-1.423 1.16-1.333 3.425.27 4.445l6.2 3.946a4.75 4.75 0 005.101 0l6.201-3.946c1.603-1.02 1.693-3.285.27-4.445z" />
      </G>
      <Defs>
        <ClipPath id="apple-shortcuts-solid_svg__clip0_3786_327">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAppleShortcutsSolid);
export default ForwardRef;
