import * as React from "react";
function SvgSafe(
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
        d="M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M10 15a3 3 0 110-6 3 3 0 010 6zM18 14v-4M12.5 9.5l1-1M7.5 9.5l-1-1M6.5 15.5l1-1M13.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSafe);
export default ForwardRef;
