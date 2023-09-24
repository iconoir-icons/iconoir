import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMusicNotePlusSolid(
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
        d="M16 10h3m3 0h-3m0 0V7m0 3v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 21H4a2 2 0 01-2-2v-1a2 2 0 012-2h3V4l5-1v4L7 8v11a2 2 0 01-2 2z"
        fill="currentColor"
      />
      <Path
        d="M7 16v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 012-2h3zm0 0V8m0 0V4l5-1v4L7 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicNotePlusSolid);
export default ForwardRef;
