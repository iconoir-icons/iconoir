import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgTransitionDown(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M18 2H6a3 3 0 00-3 3v2a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3z"
        stroke="currentColor"
      />
      <path
        d="M3 16v2a4 4 0 004 4h10a4 4 0 004-4v-2M12 10v8m0 0l-3-3m3 3l3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransitionDown);
export default ForwardRef;
