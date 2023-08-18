import * as React from "react";
function SvgCircleSpark(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6.5c3.134 0 4.5-1.318 4.5-4.5 0 3.182 1.357 4.5 4.5 4.5-3.143 0-4.5 1.357-4.5 4.5 0-3.143-1.366-4.5-4.5-4.5z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCircleSpark);
export default ForwardRef;
