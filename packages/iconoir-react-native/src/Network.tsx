import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgNetwork(
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
      <Rect x={3} y={2} width={7} height={5} rx={0.6} stroke="currentColor" />
      <Rect
        x={8.5}
        y={17}
        width={7}
        height={5}
        rx={0.6}
        stroke="currentColor"
      />
      <Rect x={14} y={2} width={7} height={5} rx={0.6} stroke="currentColor" />
      <Path
        d="M6.5 7v3.5a2 2 0 002 2h7a2 2 0 002-2V7M12 12.5V17"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNetwork);
export default ForwardRef;
