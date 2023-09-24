import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgHorizDistributionRightSolid(
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M5 7v10h5.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H5z"
        fill="currentColor"
      />
      <path
        d="M5 17V7m0 10h5.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H5m0 10v3M5 7V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7v10h3.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H15z"
        fill="currentColor"
      />
      <path
        d="M15 17V7m0 10h3.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H15m0 10v3m0-13V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHorizDistributionRightSolid);
export default ForwardRef;
