import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgArrowUpRightSquareSolid(
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm6.279 6.171h4.95a.747.747 0 01.75.75v4.95a.75.75 0 01-1.5 0v-3.139l-4.377 4.377a.75.75 0 11-1.06-1.061l4.376-4.377h-3.14a.75.75 0 010-1.5z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowUpRightSquareSolid);
export default ForwardRef;
