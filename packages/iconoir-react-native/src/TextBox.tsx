import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgTextBox(
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
        d="M12 8v8m0-8H8m4 0h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 13.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.5m18-3V5a2 2 0 00-2-2H5a2 2 0 00-2 2v5.5M19.5 13.5v-3h3v3h-3zM1.5 13.5v-3h3v3h-3z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTextBox);
export default ForwardRef;
