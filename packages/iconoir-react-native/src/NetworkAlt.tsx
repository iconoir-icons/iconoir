import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgNetworkAlt(
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
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(1 0 0 -1 3 22)"
        stroke="currentColor"
      />
      <Rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(1 0 0 -1 8.5 7)"
        stroke="currentColor"
      />
      <Rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(1 0 0 -1 14 22)"
        stroke="currentColor"
      />
      <Path
        d="M6.5 17v-3.5a2 2 0 012-2h7a2 2 0 012 2V17M12 11.5V7"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNetworkAlt);
export default ForwardRef;
