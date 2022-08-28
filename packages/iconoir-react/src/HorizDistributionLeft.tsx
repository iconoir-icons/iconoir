import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgHorizDistributionLeft(
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
        d="M19 17V7m0 10h-5.4a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6H19m0 10v3m0-13V4M9 17V7m0 10H5.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6H9m0 10v3M9 7V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHorizDistributionLeft);
export default ForwardRef;
