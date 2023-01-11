import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPenTabletConnectUsb(
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
        d="M22 7V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2 12h4M6 3v18" stroke="currentColor" />
      <Path
        d="M19.25 12H11M18.7 12l-.825 3h-1.65M17.6 12l-1.1-3h-1.925M22 12a1.37 1.37 0 00-1.375-1.364c-.76 0-1.375.61-1.375 1.364a1.37 1.37 0 001.375 1.364c.76 0 1.375-.61 1.375-1.364z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPenTabletConnectUsb);
export default ForwardRef;
