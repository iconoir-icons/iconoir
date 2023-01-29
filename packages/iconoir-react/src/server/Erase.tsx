import * as React from "react";
function SvgErase(
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
        d="M21 21H9M15.889 14.89L8.464 7.463M2.893 12.607l9.193-9.193a2 2 0 012.828 0l4.95 4.95a2 2 0 010 2.828l-9.243 9.243a1.929 1.929 0 01-2.728 0l-5-5a2 2 0 010-2.828z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgErase);
export default ForwardRef;
