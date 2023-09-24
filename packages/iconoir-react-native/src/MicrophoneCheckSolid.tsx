import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMicrophoneCheckSolid(
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
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M15.5 20.5l2 2 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={5}
        y={2}
        width={6}
        height={12}
        rx={3}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <Path
        d="M1 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M8 18v4m0 0H5m3 0h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicrophoneCheckSolid);
export default ForwardRef;
