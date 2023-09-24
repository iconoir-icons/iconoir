import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgTextSquareSolid(
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
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zm4 3.4A.75.75 0 017 6.25h10a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V7.75h-3.5v8.5H14a.75.75 0 010 1.5h-4a.75.75 0 010-1.5h1.25v-8.5h-3.5V9a.75.75 0 01-1.5 0V7z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTextSquareSolid);
export default ForwardRef;
