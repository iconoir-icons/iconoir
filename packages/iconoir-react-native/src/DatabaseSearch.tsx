import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgDatabaseSearch(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M20.5 20.5L22 22M16 18.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM4 6v6s0 3 7 3 7-3 7-3V6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3zM11 21c-7 0-7-3-7-3v-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseSearch);
export default ForwardRef;
