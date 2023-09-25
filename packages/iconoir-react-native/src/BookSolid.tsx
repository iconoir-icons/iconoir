import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgBookSolid(
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
        d="M20.75 16.714a.755.755 0 01-.014.143.75.75 0 01-.736.893H6a1.25 1.25 0 100 2.5h14a.75.75 0 010 1.5H6A2.75 2.75 0 013.25 19V5A2.75 2.75 0 016 2.25h13.4c.746 0 1.35.604 1.35 1.35v13.114zM9 6.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBookSolid);
export default ForwardRef;