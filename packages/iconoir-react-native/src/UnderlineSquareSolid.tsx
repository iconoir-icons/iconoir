import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgUnderlineSquareSolid(
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
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zM8 5.25a.75.75 0 01.75.75v4a3.25 3.25 0 006.5 0V6a.75.75 0 011.5 0v4a4.75 4.75 0 11-9.5 0V6A.75.75 0 018 5.25zm-2 12a.75.75 0 000 1.5h12a.75.75 0 000-1.5H6z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgUnderlineSquareSolid);
export default ForwardRef;
