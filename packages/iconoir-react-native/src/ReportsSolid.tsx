import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgReportsSolid(
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
      <Rect x={16} y={3} width={5} height={18} rx={2} fill="currentColor" />
      <Rect x={9.5} y={9} width={5} height={12} rx={2} fill="currentColor" />
      <Rect x={3} y={16} width={5} height={5} rx={2} fill="currentColor" />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgReportsSolid);
export default ForwardRef;
