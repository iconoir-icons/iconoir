import * as React from "react";
function SvgTextBox(
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
        d="M12 8v8m0-8H8m4 0h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.5m18-3V5a2 2 0 00-2-2H5a2 2 0 00-2 2v5.5M19.5 13.5v-3h3v3h-3zM1.5 13.5v-3h3v3h-3z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTextBox);
export default ForwardRef;
