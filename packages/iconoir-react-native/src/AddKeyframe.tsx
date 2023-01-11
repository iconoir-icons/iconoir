import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAddKeyframe(
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
      <Path
        d="M15 5h3m3 0h-3m0 0V2m0 3v3M14.848 13.317l-4.343 4.963a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L7.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAddKeyframe);
export default ForwardRef;
