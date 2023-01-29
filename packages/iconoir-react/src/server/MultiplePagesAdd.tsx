import * as React from "react";
function SvgMultiplePagesAdd(
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
        d="M1.992 19h3m3 0h-3m0 0v-3m0 3v3M7 2h9.5L21 6.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 22h5.5a1.5 1.5 0 001.5-1.5V8.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0014.25 5H4.5A1.5 1.5 0 003 6.5V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5v3.4a.6.6 0 00.6.6H18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiplePagesAdd);
export default ForwardRef;
