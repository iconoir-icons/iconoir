import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAirConditioner(
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
      <Path
        d="M22 3.6V11H2V3.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6zM18 7h1M2 11l.79 2.584A2 2 0 004.702 15H6M22 11l-.79 2.584A2 2 0 0119.298 15H18M9.5 14.5s0 7-3.5 7M14.5 14.5s0 7 3.5 7M12 14.5v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAirConditioner);
export default ForwardRef;
