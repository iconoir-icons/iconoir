import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSleeperChair(
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
        d="M4 18v3M5 10V5a2 2 0 012-2h10a2 2 0 012 2v5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 10a2.5 2.5 0 00-2.5 2.5V14H7v-1.5a2.5 2.5 0 10-3 2.45V18h16v-3.05a2.5 2.5 0 00-.5-4.95zM20 18v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSleeperChair);
export default ForwardRef;
