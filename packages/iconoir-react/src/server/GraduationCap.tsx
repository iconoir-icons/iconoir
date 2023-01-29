import * as React from "react";
function SvgGraduationCap(
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
        d="M2.573 8.463l8.659-4.329a.6.6 0 01.536 0l8.659 4.33a.6.6 0 010 1.073l-8.659 4.329a.6.6 0 01-.536 0l-8.659-4.33a.6.6 0 010-1.073z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 13V9.5l-2-1M4.5 10.5v5.412a2 2 0 001.142 1.807l5 2.374a2 2 0 001.716 0l5-2.374a2 2 0 001.142-1.807V10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGraduationCap);
export default ForwardRef;
