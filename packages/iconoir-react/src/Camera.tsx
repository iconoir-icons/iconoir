import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCamera(
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
        d="M2 19V9a2 2 0 012-2h.5a2 2 0 001.6-.8l2.22-2.96A.6.6 0 018.8 3h6.4a.6.6 0 01.48.24L17.9 6.2a2 2 0 001.6.8h.5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCamera);
export default ForwardRef;
