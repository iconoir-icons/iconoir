import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgIndustry(
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
        d="M18 10c0-1-1-2-3-2h-1a3 3 0 01-3-3V2M18 21h3v-9h-3v4.5m0 4.5v-4.5m0 4.5H3v-4l3.5-3 4 2.5 4-2.5 3.5 2.5M21 10c0-6-4-6-4-6s4 .5 4-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgIndustry);
export default ForwardRef;
