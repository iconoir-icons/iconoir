import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCreditCard2(
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
        d="M2 9V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V9zm0 0h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={15} y={12} width={4} height={4} rx={0.6} fill="currentColor" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCard2);
export default ForwardRef;
