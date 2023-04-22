import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgLockSquare(
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
        d="M14.667 12h.733a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h.733m5.334 0V9.5c0-.833-.534-2.5-2.667-2.5S9.333 8.667 9.333 9.5V12m5.334 0H9.333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLockSquare);
export default ForwardRef;
