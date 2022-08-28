import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgNetworkLeft(
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
      <Rect
        x={2}
        y={21}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 21)"
        stroke="currentColor"
      />
      <Rect
        x={17}
        y={15.5}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 17 15.5)"
        stroke="currentColor"
      />
      <Rect
        x={2}
        y={10}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 10)"
        stroke="currentColor"
      />
      <Path
        d="M7 17.5h3.5a2 2 0 002-2v-7a2 2 0 00-2-2H7M12.5 12H17"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNetworkLeft);
export default ForwardRef;
