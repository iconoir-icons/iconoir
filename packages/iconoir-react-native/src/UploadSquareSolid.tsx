import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgUploadSquareSolid(
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
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zm3 14.4a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm7.28-12.53a.75.75 0 00-1.06 0l-3.5 3.5a.75.75 0 101.06 1.06l2.22-2.22V14a.75.75 0 001.5 0V7.81l2.22 2.22a.75.75 0 101.06-1.06l-3.5-3.5z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgUploadSquareSolid);
export default ForwardRef;