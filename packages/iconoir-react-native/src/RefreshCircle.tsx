import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgRefreshCircle(
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
      <Circle cx={12} cy={12} r={10} stroke="currentColor" />
      <Path
        d="M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.494 9.722H16.4a.6.6 0 00.6-.6V7.5M7.417 13.667C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.506 13.622H7.6a.6.6 0 00-.6.6V16.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgRefreshCircle);
export default ForwardRef;
