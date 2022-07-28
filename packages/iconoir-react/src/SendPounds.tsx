import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgSendPounds(
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
        d="M13 12h8m0 0l-3.84-4M21 12l-3.84 4M7 13c-.667 1.667-1.667 3.333-3 4h6.333s1 0 1.667-.667M9.667 13H3M11 10a3 3 0 10-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSendPounds);
export default ForwardRef;
