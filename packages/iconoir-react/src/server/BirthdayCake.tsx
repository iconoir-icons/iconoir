import * as React from "react";
function SvgBirthdayCake(
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
        d="M4 16.5V20a2 2 0 002 2h12a2 2 0 002-2v-3.5M3 14v-1a2 2 0 012-2h14a2 2 0 012 2v1M12 8v3M12 8c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8zM9 14a3 3 0 11-6 0M15 14a3 3 0 11-6 0M21 14a3 3 0 11-6 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBirthdayCake);
export default ForwardRef;
