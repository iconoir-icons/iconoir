import * as React from "react";
function SvgBag(
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
        d="M4.508 20h14.984a.6.6 0 00.592-.501l1.8-10.8A.6.6 0 0021.292 8H2.708a.6.6 0 00-.592.699l1.8 10.8a.6.6 0 00.592.501z"
        stroke="currentColor"
      />
      <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBag);
export default ForwardRef;
