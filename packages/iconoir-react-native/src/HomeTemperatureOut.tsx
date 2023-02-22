import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgHomeTemperatureOut(
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
        d="M14 8L4.311 3.156a.6.6 0 00-.6.037L2.5 4M12 11v8a2 2 0 01-2 2H7m0 0H3.6a.6.6 0 01-.6-.6v-4.8a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6V21zM19 18a2 2 0 100-4 2 2 0 000 4zM19 7.5V14M19 12h2M19 9h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHomeTemperatureOut);
export default ForwardRef;
