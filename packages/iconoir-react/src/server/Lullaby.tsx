import * as React from "react";
function SvgLullaby(
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
        d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0V3.6a.6.6 0 01.6-.6H21"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLullaby);
export default ForwardRef;
