import * as React from "react";
function SvgInputSearch(
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
        d="M21 12v-2a5 5 0 00-5-5H8a5 5 0 00-5 5v0a5 5 0 005 5h4M20.124 19.119a3 3 0 10-4.248-4.237 3 3 0 004.248 4.237zm0 0L22 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgInputSearch);
export default ForwardRef;
