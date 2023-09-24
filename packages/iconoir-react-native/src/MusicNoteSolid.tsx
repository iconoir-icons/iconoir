import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMusicNoteSolid(
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
        d="M10 21H9a2 2 0 01-2-2v-1a2 2 0 012-2h3V4l5-1v4l-5 1v11a2 2 0 01-2 2z"
        fill="currentColor"
      />
      <Path
        d="M12 16v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a2 2 0 012-2h3zm0 0V8m0 0V4l5-1v4l-5 1z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicNoteSolid);
export default ForwardRef;
