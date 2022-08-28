import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgMusic1Add(
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
        d="M17 6.5h3m3 0h-3m0 0v-3m0 3v3M6 16V5l8-1M15 14v-4M12 19h1a2 2 0 002-2v-3h-3a2 2 0 00-2 2v1a2 2 0 002 2zM3 21h1a2 2 0 002-2v-3H3a2 2 0 00-2 2v1a2 2 0 002 2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMusic1Add);
export default ForwardRef;
