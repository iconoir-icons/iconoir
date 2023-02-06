import * as React from "react";
function SvgHomeSecure(
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
        d="M14 12h.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6v-2.8a.6.6 0 01.6-.6h.4m4 0v-2c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8l9.732-4.866a.6.6 0 01.536 0L22 8M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHomeSecure);
export default ForwardRef;
