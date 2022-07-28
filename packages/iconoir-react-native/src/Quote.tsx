import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgQuote(
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
        d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgQuote);
export default ForwardRef;
