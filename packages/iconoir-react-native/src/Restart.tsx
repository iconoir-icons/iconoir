import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgRestart(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        clipPath="url(#restart_svg__clip0_1735_6488)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.677 20.567C2.531 18.021.758 12.758 2.717 8.144 4.875 3.06 10.745.688 15.829 2.846c5.084 2.158 7.456 8.029 5.298 13.113a9.954 9.954 0 01-3.962 4.608" />
        <Path d="M17 16v4.4a.6.6 0 00.6.6H22M12 22.01l.01-.011" />
      </G>
      <Defs>
        <ClipPath id="restart_svg__clip0_1735_6488">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRestart);
export default ForwardRef;
