import * as React from "react";
function SvgAxes(
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
        d="M21 19.452l-9-6.61m0 0V3m0 9.843l-9 6.609M20.438 16.71L21 19.452 18.187 20M9.75 5.194L12 3l2.25 2.194M5.813 20L3 19.452l.563-2.742"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAxes);
export default ForwardRef;
