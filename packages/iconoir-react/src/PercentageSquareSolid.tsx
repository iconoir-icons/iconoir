import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPercentageSquareSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm11.9 12a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM7.25 8.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm8.22-1.03a.75.75 0 111.06 1.06l-8 8a.75.75 0 01-1.06-1.06l8-8z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPercentageSquareSolid);
export default ForwardRef;
