import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCardReader(
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
        d="M5 19V3h14v16a2 2 0 01-2 2H7a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <Path
        d="M5 6H3.5A1.5 1.5 0 012 4.5v0A1.5 1.5 0 013.5 3h17A1.5 1.5 0 0122 4.5v0A1.5 1.5 0 0120.5 6H19"
        stroke="currentColor"
      />
      <Path
        d="M15 3v18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCardReader);
export default ForwardRef;
