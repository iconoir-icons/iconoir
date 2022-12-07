import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAtSign(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M17.5 19.125A9 9 0 1121 12c0 5.5-6 5.5-6 2V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12M15 12v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAtSign);
export default ForwardRef;
