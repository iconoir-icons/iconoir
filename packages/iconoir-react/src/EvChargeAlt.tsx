import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgEvChargeAlt(
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
        d="M22 5l-2 4-2-4M16 5h-2v4h2M14 7h1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9v10a2 2 0 002 2h9a2 2 0 002-2v-5M9 5.6V7a2 2 0 01-2 2H5a2 2 0 01-2-2V5.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6zM4 5V3M8 5V3"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgEvChargeAlt);
export default ForwardRef;
