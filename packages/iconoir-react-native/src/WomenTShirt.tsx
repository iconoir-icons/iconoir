import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgWomenTShirt(
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
        d="M18 21H6s1.66-4.825 1.5-8c-.1-1.989-1.524-3.079-1-5 .23-.842 1-2 1-2S9 7 12 7s4.5-1 4.5-1 .77 1.158 1 2c.524 1.921-.9 3.011-1 5-.16 3.175 1.5 8 1.5 8zM7.5 6V3M16.5 6V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgWomenTShirt);
export default ForwardRef;
