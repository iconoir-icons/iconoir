import * as React from "react";
function SvgPipe3D(
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
        d="M10 20a6 6 0 110-12 6 6 0 010 12zM10.773 4.742a6 6 0 018.7 8.258M3 21l6.5-6.5M21 3l-1.5 1.5M6 9.5L10.5 5l.25-.25M14.5 18l4.719-4.719"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPipe3D);
export default ForwardRef;
