import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgScreenshot(
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
        d="M10 21.4v-7.006a.6.6 0 01.6-.6h1.173a.6.6 0 00.504-.275l1.446-2.244a.6.6 0 01.504-.275h3.546a.6.6 0 01.504.275l1.446 2.244a.6.6 0 00.504.275H21.4a.6.6 0 01.6.6V21.4a.6.6 0 01-.6.6H10.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 19a2 2 0 100-4 2 2 0 000 4zM3 18v3h2.5M3 9.5v5M3 6V3h3M9.5 3h5M18 3h3v2.5M21 10V8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgScreenshot);
export default ForwardRef;
