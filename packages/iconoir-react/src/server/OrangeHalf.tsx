import * as React from "react";
function SvgOrangeHalf(
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
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2m0 20C6.5 22 2 17.5 2 12S6.5 2 12 2m0 20V12m0-10v10m0 0l5 5.5M12 12l5-5m-5 5h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgOrangeHalf);
export default ForwardRef;
