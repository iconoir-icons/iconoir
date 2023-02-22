import * as React from "react";
function SvgTemperatureUp(
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
        d="M4 12a5 5 0 106 0M4 12V3h6v9M10 3h2M10 6h2M10 9h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14a2 2 0 100 4 2 2 0 000-4zm0 0V6M19 18V6m0 0l2.5 2.5M19 6l-2.5 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTemperatureUp);
export default ForwardRef;
