import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCpuWarning(
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
        d="M19 2v4M19 10.01l.01-.011M16 14v1.4a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14v5.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6H14M20 17h2M17 20v2M12 20v2M7 20v2M4 17H2M4 12H2M4 7H2M12 4V2M7 4V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCpuWarning);
export default ForwardRef;
