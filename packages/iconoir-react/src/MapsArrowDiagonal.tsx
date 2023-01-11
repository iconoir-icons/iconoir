import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMapsArrowDiagonal(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M4.031 8.917l15.477-4.334a.5.5 0 01.616.617l-4.333 15.476a.5.5 0 01-.94.067l-3.248-7.382a.5.5 0 00-.256-.257L3.965 9.856a.5.5 0 01.066-.94z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMapsArrowDiagonal);
export default ForwardRef;
