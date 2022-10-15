import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgHdDisplay(
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
      <path
        d="M6 8.5V12m0 3.5V12m0 0h4.5m0 0V8.5m0 3.5v3.5M14 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5V12z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHdDisplay);
export default ForwardRef;
