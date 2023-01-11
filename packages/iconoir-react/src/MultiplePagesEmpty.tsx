import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMultiplePagesEmpty(
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
        d="M7 2h9.5L21 6.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20.5v-14A1.5 1.5 0 014.5 5h9.752a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0118 8.75V20.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 013 20.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5v3.4a.6.6 0 00.6.6H18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiplePagesEmpty);
export default ForwardRef;
