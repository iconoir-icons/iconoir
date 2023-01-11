import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgDialpad(
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
        d="M5.5 5a.5.5 0 110-1 .5.5 0 010 1zM5.5 10a.5.5 0 110-1 .5.5 0 010 1zM5.5 15a.5.5 0 110-1 .5.5 0 010 1zM12 5a.5.5 0 110-1 .5.5 0 010 1zM12 10a.5.5 0 110-1 .5.5 0 010 1zM12 15a.5.5 0 110-1 .5.5 0 010 1zM12 20a.5.5 0 110-1 .5.5 0 010 1zM18.5 5a.5.5 0 110-1 .5.5 0 010 1zM18.5 10a.5.5 0 110-1 .5.5 0 010 1zM18.5 15a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDialpad);
export default ForwardRef;
