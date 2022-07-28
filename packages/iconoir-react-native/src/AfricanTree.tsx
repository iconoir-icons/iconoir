import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAfricanTree(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        clipPath="url(#african-tree_svg__clip0_2032_8254)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12 22V12m0-4v4m0 0l3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 00-.513-8.234 9.904 9.904 0 00-12.16 0 5.502 5.502 0 00-.513 8.234l6.169 6.169a.6.6 0 00.848 0z" />
      </G>
      <Defs>
        <ClipPath id="african-tree_svg__clip0_2032_8254">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAfricanTree);
export default ForwardRef;
