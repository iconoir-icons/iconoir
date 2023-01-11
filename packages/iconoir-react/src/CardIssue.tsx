import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCardIssue(
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
        d="M22 9V5.6a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6v12.8a.6.6 0 00.6.6H12M22 9H6m16 0v4M21 16.05A3.5 3.5 0 1016 20.95m4.998-4.9A3.5 3.5 0 1116 20.95m5-4.9l-5 4.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCardIssue);
export default ForwardRef;
