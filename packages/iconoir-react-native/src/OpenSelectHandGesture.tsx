import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgOpenSelectHandGesture(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M8 14.571l-1.823-1.736a1.558 1.558 0 00-2.247.103v0a1.558 1.558 0 00.035 2.092l5.942 6.338c.379.403.906.632 1.459.632H16c2.4 0 4-2 4-4 0 0 0 0 0 0V9.429"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 10v-.571c0-2.286 3-2.286 3 0M14 10V8.286C14 6 17 6 17 8.286V10M11 10V7.5c0-2.286 3-2.286 3 0 0 0 0 0 0 0V10M8 14.571V3.5A1.5 1.5 0 019.5 2v0c.828 0 1.5.67 1.5 1.499V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgOpenSelectHandGesture);
export default ForwardRef;
