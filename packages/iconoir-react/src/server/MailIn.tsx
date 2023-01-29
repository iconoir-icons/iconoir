import * as React from "react";
function SvgMailIn(
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
        d="M5 9l4.5 3L14 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19H3a2 2 0 01-2-2V7a2 2 0 012-2h13a2 2 0 012 2v2"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M23 14h-6m0 0l3-3m-3 3l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMailIn);
export default ForwardRef;
