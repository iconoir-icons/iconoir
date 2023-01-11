import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgTransitionLeft(
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
        d="M22 18V6a3 3 0 00-3-3h-2a3 3 0 00-3 3v12a3 3 0 003 3h2a3 3 0 003-3z"
        stroke="currentColor"
      />
      <Path
        d="M8 3H6a4 4 0 00-4 4v10a4 4 0 004 4h2M14 12H6m0 0l3-3m-3 3l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTransitionLeft);
export default ForwardRef;
