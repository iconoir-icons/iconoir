import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgUserCircleAlt(
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
        d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M12 12a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={10} stroke="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgUserCircleAlt);
export default ForwardRef;
