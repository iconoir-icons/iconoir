import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgExclude(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M10.5 15h-.9a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6V9.6a.6.6 0 00-.6-.6h-4.8a.6.6 0 00-.6.6v.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15h.9a.6.6 0 00.6-.6v-.9M9 13.5v.9a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.5v-.9a.6.6 0 01.6-.6h.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgExclude);
export default ForwardRef;
