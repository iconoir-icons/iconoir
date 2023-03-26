import * as React from "react";
function SvgCommodity(
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
        d="M12.147 18.28l1.184-5.8a.6.6 0 01.588-.48h6.162a.6.6 0 01.588.48l1.184 5.8a.6.6 0 01-.588.72h-8.53a.6.6 0 01-.588-.72z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.147 11.28l1.184-5.8A.6.6 0 018.918 5h6.164a.6.6 0 01.587.48l1.184 5.8a.6.6 0 01-.588.72h-8.53a.6.6 0 01-.588-.72z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2.147 18.28l1.184-5.8a.6.6 0 01.587-.48h6.163a.6.6 0 01.588.48l1.184 5.8a.6.6 0 01-.588.72h-8.53a.6.6 0 01-.588-.72z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCommodity);
export default ForwardRef;
