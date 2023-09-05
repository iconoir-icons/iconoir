import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgLockSlash(
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
        d="M11.5 12H6.6a.6.6 0 00-.6.6v6.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6v-.9M16 12V8c0-1.333-.8-4-4-4-.747 0-1.363.145-1.869.385M16 12h1.4a.6.6 0 01.6.6v.4M8 8v4M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgLockSlash);
export default ForwardRef;
