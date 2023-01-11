import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPathArrow(
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
        d="M18 16.5V3m0 0l3.5 3.5M18 3l-3.5 3.5M18 16.5a3.5 3.5 0 11-7 0v-9M11 7.5a3.5 3.5 0 10-7 0v12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPathArrow);
export default ForwardRef;
