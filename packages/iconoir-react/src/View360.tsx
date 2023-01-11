import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgView360(
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
        d="M4 8.5h1.75m0 0a1.75 1.75 0 110 3.5H3m2.75-3.5a1.75 1.75 0 100-3.5H3M21 15c0 3.314-4.03 6-9 6s-9-2.686-9-6M14 5h-1a3 3 0 00-3 3v2m4.5-.5v.5a2 2 0 01-2 2H12a2 2 0 01-2-2v-.5a2 2 0 012-2h.5a2 2 0 012 2zM17 8.5V7a2 2 0 012-2h.5a2 2 0 012 2v3a2 2 0 01-2 2H19a2 2 0 01-2-2V8.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgView360);
export default ForwardRef;
