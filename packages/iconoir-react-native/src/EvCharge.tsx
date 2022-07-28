import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgEvCharge(
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
        d="M6 9v10a2 2 0 002 2h9a2 2 0 002-2v-5M9 5.6V7a2 2 0 01-2 2H5a2 2 0 01-2-2V5.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6zM4 5V3M8 5V3"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M18.167 4L16.5 7h4l-1.667 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEvCharge);
export default ForwardRef;
