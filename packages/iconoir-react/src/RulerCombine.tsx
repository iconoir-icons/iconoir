import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgRulerCombine(
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
        d="M2 21.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H10.6a.6.6 0 00-.6.6v10.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6zM16 10V7M10 10V7M10 16H7M10 10H7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgRulerCombine);
export default ForwardRef;
