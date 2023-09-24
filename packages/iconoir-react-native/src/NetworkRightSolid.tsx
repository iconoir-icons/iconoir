import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgNetworkRightSolid(
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
      <Rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 21)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <Rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 7 15.5)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <Rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 10)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <Path
        d="M17 17.5h-3.5a2 2 0 01-2-2v-7a2 2 0 012-2H17M11.5 12H7"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkRightSolid);
export default ForwardRef;
