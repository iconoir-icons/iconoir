import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeLightroom(
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
      <Path
        d="M21 7v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 8v8h4M14 10.5V13m0 3v-3m0 0s0-2.5 3-2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeLightroom);
export default ForwardRef;
