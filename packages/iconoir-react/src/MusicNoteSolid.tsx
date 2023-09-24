import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMusicNoteSolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M10 21H9a2 2 0 01-2-2v-1a2 2 0 012-2h3V4l5-1v4l-5 1v11a2 2 0 01-2 2z"
        fill="currentColor"
      />
      <path
        d="M12 16v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a2 2 0 012-2h3zm0 0V8m0 0V4l5-1v4l-5 1z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicNoteSolid);
export default ForwardRef;
