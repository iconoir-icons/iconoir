import * as React from "react";
function SvgNoSmoking(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        d="M18 15v3M18 11c0-1-1-2-3-2h-1a3 3 0 01-3-3V2M22 11c0-6-4-6-4-6s4 1 4-3M22 15v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6 18H18l-3-3H2.6a.6.6 0 00-.6.6v1.8a.6.6 0 00.6.6z"
        stroke="currentColor"
      />
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNoSmoking);
export default ForwardRef;
