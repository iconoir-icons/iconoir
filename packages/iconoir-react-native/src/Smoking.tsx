import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgSmoking(
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
        d="M18 19v3M18 16c0-1-1-2-3-2h-1a3 3 0 01-3-3V8.5A2.5 2.5 0 0113.5 6v0h.5M22 16c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4M22 19v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={2} y={19} width={12} height={3} rx={0.6} stroke="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSmoking);
export default ForwardRef;
