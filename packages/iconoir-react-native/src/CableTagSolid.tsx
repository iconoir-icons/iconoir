import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCableTagSolid(
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
        d="M8 2.25A6.75 6.75 0 001.25 9v6A6.75 6.75 0 008 21.75h8A6.75 6.75 0 0022.75 15V9A6.75 6.75 0 0016 2.25H8zm4.359 6.039a.75.75 0 00-1.385-.577l-1.666 4A.75.75 0 0010 12.75h2.875l-1.234 2.962a.75.75 0 001.385.577l1.666-4A.75.75 0 0014 11.25h-2.875l1.234-2.961z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCableTagSolid);
export default ForwardRef;
