import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAddHexagon(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M9 12h3m3 0h-3m0 0V9m0 3v3M11.7 1.173a.6.6 0 01.6 0l8.926 5.154a.6.6 0 01.3.52v10.307a.6.6 0 01-.3.52L12.3 22.826a.6.6 0 01-.6 0l-8.926-5.154a.6.6 0 01-.3-.52V6.847a.6.6 0 01.3-.52L11.7 1.174z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAddHexagon);
export default ForwardRef;
