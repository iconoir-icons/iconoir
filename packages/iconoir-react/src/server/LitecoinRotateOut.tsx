import * as React from "react";
function SvgLitecoinRotateOut(
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
        d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8h3.4a.6.6 0 00.6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05 16h-3.4a.6.6 0 00-.6.6V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 7v9.4a.6.6 0 00.6.6h4.4"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.5 13l4.5-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLitecoinRotateOut);
export default ForwardRef;
