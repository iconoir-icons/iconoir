import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgPenConnectBluetooth(
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
        clipPath="url(#pen-connect-bluetooth_svg__clip0)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.5 17.5l-1 4 3.731-.933a1 1 0 00.465-.263L21.5 8.5a2.121 2.121 0 000-3v0a2.121 2.121 0 00-3 0l-4 4M17.5 6.5l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1" />
      </G>
      <Defs>
        <ClipPath id="pen-connect-bluetooth_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPenConnectBluetooth);
export default ForwardRef;
