import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgBackward15Seconds(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M3 13a9 9 0 109-9M9 9v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9h-2a1 1 0 00-1 1v1.5a1 1 0 001 1h1a1 1 0 011 1V15a1 1 0 01-1 1h-2M12 4H4.5m0 0l2-2m-2 2l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBackward15Seconds);
export default ForwardRef;
