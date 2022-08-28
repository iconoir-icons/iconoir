import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgEaseCurveControlPoints(
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
        d="M17 20a2 2 0 104 0 2 2 0 00-4 0zm0 0h-2M7 4a2 2 0 11-4 0 2 2 0 014 0zm0 0h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgEaseCurveControlPoints);
export default ForwardRef;
