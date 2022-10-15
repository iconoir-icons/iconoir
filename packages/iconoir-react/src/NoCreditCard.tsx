import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgNoCreditCard(
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
        d="M5 5H2.6a.6.6 0 00-.6.6v12.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V5.6a.6.6 0 00-.6-.6H10M22 9h-8M6 9h3M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNoCreditCard);
export default ForwardRef;
