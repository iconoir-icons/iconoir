import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMegaphone(
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
        d="M14 14V6m0 8l6.102 3.487a.6.6 0 00.898-.52V3.033a.6.6 0 00-.898-.521L14 6m0 8H7a4 4 0 01-4-4v0a4 4 0 014-4h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 01-3.92.56z"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMegaphone);
export default ForwardRef;
