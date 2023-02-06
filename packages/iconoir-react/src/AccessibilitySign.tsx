import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAccessibilitySign(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M11.5 12.5l7-.5-1.5 6.5M11.5 12.5l4.5-5L12.5 5 10 7.5M18.5 6.5a2 2 0 110-4 2 2 0 010 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 12.5a5 5 0 017.584 6M3.729 15A5 5 0 0011 20.831"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAccessibilitySign);
export default ForwardRef;
