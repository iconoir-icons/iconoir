import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function Svg3DRectThreePts(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
      <path d="M3 21V3.6a.6.6 0 01.6-.6H21" stroke="currentColor" />
      <path
        d="M17 21h3.4a.6.6 0 00.6-.6V17M21 7v2M21 12v2M7 21h2M12 21h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4a1 1 0 100-2 1 1 0 000 2zM3 22a1 1 0 100-2 1 1 0 000 2zM21 4a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(Svg3DRectThreePts);
export default ForwardRef;
