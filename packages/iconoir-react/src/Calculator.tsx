import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCalculator(
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
        d="M1 21V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M15 7h4M15 15.5h4M15 18.5h4M5 7h2m2 0H7m0 0V5m0 2v2M5.586 18.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCalculator);
export default ForwardRef;
