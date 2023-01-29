import * as React from "react";
function SvgAirplane(
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
        d="M10.5 4.5v4.667a.6.6 0 01-.282.51l-7.436 4.647a.6.6 0 00-.282.508v.9a.6.6 0 00.746.582l6.508-1.628a.6.6 0 01.746.582v2.96a.6.6 0 01-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 01.214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 01-.205-.452v-2.96a.6.6 0 01.745-.582l6.51 1.628a.6.6 0 00.745-.582v-.9a.6.6 0 00-.282-.508l-7.436-4.648a.6.6 0 01-.282-.509V4.5a1.5 1.5 0 00-3 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAirplane);
export default ForwardRef;
