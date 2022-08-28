import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgTwoSeaterSofa(
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
        d="M2 16v3M12 13V7a2 2 0 012-2h4a2 2 0 012 2v2M12 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 9a2 2 0 00-2 2v2H6v-2a2 2 0 10-4 0v6h20v-6a2 2 0 00-2-2zM22 16v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTwoSeaterSofa);
export default ForwardRef;
