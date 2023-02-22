import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgTemperatureDown(
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
        d="M5 12a5 5 0 106 0M5 12V3h6v9M11 3h2M11 6h2M11 9h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14a2 2 0 100 4 2 2 0 000-4zm0 0V6M19 6v12m0 0l2.5-2.5M19 18l-2.5-2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTemperatureDown);
export default ForwardRef;
