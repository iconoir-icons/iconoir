import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobePhotoshop(
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
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M21 7v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16v-4m0 0V8h2a2 2 0 012 2v0a2 2 0 01-2 2H7zM17 11v0c-.306-.613-.933-1-1.618-1H15a1.5 1.5 0 00-1.5 1.5v0A1.5 1.5 0 0015 13h.5a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5h-.382a1.809 1.809 0 01-1.618-1v0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobePhotoshop);
export default ForwardRef;
