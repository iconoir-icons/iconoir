import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCreditCard(
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
        d="M22 9v9.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6V9zm0 0H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCard);
export default ForwardRef;
