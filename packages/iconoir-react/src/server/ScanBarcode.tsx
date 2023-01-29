import * as React from "react";
function SvgScanBarcode(
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
        d="M10 12V6h1M10 12h1V6M10 18v-3h1M11 15v3h-1M7 6v6M7 15v3M14 6v6M14 15v3M17 6v6M17 15v3M6 3H3v3M2 12h20M18 3h3v3M6 21H3v-3M18 21h3v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgScanBarcode);
export default ForwardRef;
