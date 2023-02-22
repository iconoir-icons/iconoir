import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgNeighbourhood(
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
        d="M11 21H4a2 2 0 01-2-2v-4.54a2 2 0 01.963-1.71l3.5-2.122a2 2 0 012.074 0l3.5 2.121A2 2 0 0113 14.46V19a2 2 0 01-2 2zM6.5 10V6.46a2 2 0 01.963-1.71l3.5-2.122a2 2 0 012.074 0l3.5 2.121a2 2 0 01.963 1.71V10M16 21h4a2 2 0 002-2v-4.54a2 2 0 00-.963-1.71l-3.506-2.125a2 2 0 00-2.065-.005l-.633.38"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 21v-3.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V21M18 21v-3.4a.6.6 0 00-.6-.6H16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNeighbourhood);
export default ForwardRef;
