import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgLotOfCash(
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
        d="M1 16V4h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8h6.4a.6.6 0 01.6.6v10.8a.6.6 0 01-.6.6H16m0-12v12m0-12h-4m4 12h-4m0 0H5.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6H12m0 12V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgLotOfCash);
export default ForwardRef;
