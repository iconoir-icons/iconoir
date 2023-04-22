import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgRulerArrows(
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
        d="M15.4 22H8.6a.6.6 0 01-.6-.6V2.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6zM16 17h-3M16 7h-3M13 12h10m0 0l-2 2m2-2l-2-2M1 12l2-2m-2 2l2 2m-2-2h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRulerArrows);
export default ForwardRef;
