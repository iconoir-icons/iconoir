import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgUserCircle(
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
        d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 12a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUserCircle);
export default ForwardRef;
