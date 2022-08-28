import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgSwitchOnOutline(
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
        d="M17 13a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 17H7A5 5 0 017 7h10a5 5 0 010 10z" stroke="currentColor" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwitchOnOutline);
export default ForwardRef;
