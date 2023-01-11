import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCell2X2(
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
        d="M21 3.6V12h-9V3h8.4a.6.6 0 01.6.6zM21 20.4V12h-9v9h8.4a.6.6 0 00.6-.6zM3 12V3.6a.6.6 0 01.6-.6H12v9H3zM3 12v8.4a.6.6 0 00.6.6H12v-9H3z"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCell2X2);
export default ForwardRef;
