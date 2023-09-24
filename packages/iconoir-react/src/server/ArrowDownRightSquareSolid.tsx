import * as React from "react";
function SvgArrowDownRightSquareSolid(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm6.102 6.391a.75.75 0 10-1.06 1.06l4.376 4.377h-3.14a.75.75 0 000 1.5h4.95a.747.747 0 00.75-.75v-4.95a.75.75 0 00-1.5 0v3.14L9.702 8.64z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowDownRightSquareSolid);
export default ForwardRef;
