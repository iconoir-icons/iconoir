import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgNumberedListRight(
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
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M4 6h11M19 8V4M20 14h-1.4a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6h.8a.6.6 0 00.6-.6v-.8a.6.6 0 00-.6-.6H18M18 16h1.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H18M20 18h-2M4 12h11M4 18h11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumberedListRight);
export default ForwardRef;
