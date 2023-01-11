import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMicSpeaking(
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
      <Rect x={9} y={2} width={6} height={12} rx={3} stroke="currentColor" />
      <Path
        d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicSpeaking);
export default ForwardRef;
