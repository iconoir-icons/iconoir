import * as React from "react";
function SvgMediaImageList(
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
        d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 4H4.6a.6.6 0 00-.6.6V18M7 16.8l5.444-1.8L21 18M16.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMediaImageList);
export default ForwardRef;
