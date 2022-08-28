import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgScissorAlt(
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
        d="M10.236 8a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L20 16M10.236 16a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L20 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgScissorAlt);
export default ForwardRef;
