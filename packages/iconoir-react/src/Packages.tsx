import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgPackages(
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
        d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPackages);
export default ForwardRef;
