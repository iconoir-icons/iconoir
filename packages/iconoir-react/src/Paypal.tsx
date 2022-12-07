import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgPaypal(
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
        d="M3 17.5L6 3h7c6 0 6 9 0 9H8.7l-1.2 5.5H3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 21l3-14.5h7c6 0 6 9 0 9h-4.3L11.3 21H6.8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaypal);
export default ForwardRef;
