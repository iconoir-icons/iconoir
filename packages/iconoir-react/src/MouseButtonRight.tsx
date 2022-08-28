import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgMouseButtonRight(
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
        d="M4 10v4a8 8 0 1016 0V9a7 7 0 00-7-7h-1a8 8 0 00-8 8z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 2v6.4a.6.6 0 00.6.6H20"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMouseButtonRight);
export default ForwardRef;
