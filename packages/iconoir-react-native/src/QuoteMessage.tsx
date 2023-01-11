import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgQuoteMessage(
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
        d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z"
        stroke="currentColor"
      />
      <Path
        d="M10.5 10h-2a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 011 1v2zm0 0c0 1-1 2-2 3M16.5 10h-2a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 011 1v2zm0 0c0 1-1 2-2 3"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgQuoteMessage);
export default ForwardRef;
