import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgVials(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M21 21H3M9 12H5M19 12h-4M7 18a2 2 0 01-2-2V3h4v13a2 2 0 01-2 2zM17 18a2 2 0 01-2-2V3h4v13a2 2 0 01-2 2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgVials);
export default ForwardRef;
