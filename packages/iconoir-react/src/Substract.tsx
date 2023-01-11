import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSubstract(
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
        d="M15 3.6v10.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6zM13.5 21h3M21 13.5v3M21 19.5v.9a.6.6 0 01-.6.6h-.9M10.5 21h-.9a.6.6 0 01-.6-.6v-.9M19.5 9h.9a.6.6 0 01.6.6v.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 9H9.6a.6.6 0 00-.6.6v6.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSubstract);
export default ForwardRef;
