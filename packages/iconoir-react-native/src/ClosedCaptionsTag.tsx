import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgClosedCaptionsTag(
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
        d="M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z"
        stroke="currentColor"
      />
      <Path
        d="M10.5 10l-.172-.172a2.828 2.828 0 00-2-.828v0A2.828 2.828 0 005.5 11.828v.344A2.828 2.828 0 008.328 15v0c.75 0 1.47-.298 2-.828L10.5 14M18.5 10l-.172-.172a2.828 2.828 0 00-2-.828v0a2.828 2.828 0 00-2.828 2.828v.344A2.828 2.828 0 0016.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgClosedCaptionsTag);
export default ForwardRef;
