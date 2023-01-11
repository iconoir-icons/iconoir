import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMicCheck(
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
        d="M15.5 20.5l2 2 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={5} y={2} width={6} height={12} rx={3} stroke="currentColor" />
      <path
        d="M1 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M8 18v4m0 0H5m3 0h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicCheck);
export default ForwardRef;
