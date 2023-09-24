import * as React from "react";
function SvgTimerSolid(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zm.75 4.75a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0v-4zM8.25 2A.75.75 0 019 1.25h6a.75.75 0 010 1.5H9A.75.75 0 018.25 2z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTimerSolid);
export default ForwardRef;
