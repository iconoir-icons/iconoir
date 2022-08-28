import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCutAlt(
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
        d="M6.236 8a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L16 16M17 12h1M22 12h1M6.236 16a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L16 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCutAlt);
export default ForwardRef;
