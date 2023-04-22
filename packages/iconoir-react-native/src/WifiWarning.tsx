import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgWifiWarning(
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
        d="M2.126 8.324c-.2-.262-.155-.605.086-.79C5.29 5.179 8.552 4 11.999 4c3.447 0 6.71 1.178 9.788 3.535.252.212.28.558.085.789l-9.455 11.173a.548.548 0 01-.836 0L2.126 8.324z"
        stroke="currentColor"
      />
      <Path
        d="M12 8v2M12 14.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgWifiWarning);
export default ForwardRef;
