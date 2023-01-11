import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgHexagonDice(
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
        d="M11.7 1.173a.6.6 0 01.6 0l8.926 5.154a.6.6 0 01.3.52v10.307a.6.6 0 01-.3.52L12.3 22.826a.6.6 0 01-.6 0l-8.926-5.154a.6.6 0 01-.3-.52V6.847a.6.6 0 01.3-.52L11.7 1.174z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 15H7l5-8 5 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 6.5L12 7M2.5 6.5L7 15M21.5 6.5L17 15M21.5 6.5L12 7V1M21.5 17.5L17 15M2.5 17.5L7 15M7 15l5 8 5-8"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHexagonDice);
export default ForwardRef;
