import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPresentation(
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
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M22 4.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6zM8.5 21.5L12 18l3.5 3.5M12 2v2M9 12v2M12 10v4M15 8v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPresentation);
export default ForwardRef;
