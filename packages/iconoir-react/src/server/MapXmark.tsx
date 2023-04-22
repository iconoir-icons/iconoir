import * as React from "react";
function SvgMapXmark(
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
        d="M9 19l-5.21 1.737a.6.6 0 01-.79-.57V5.433a.6.6 0 01.41-.569L9 3m0 16l5.21 1.737a.6.6 0 00.79-.57V5.433a.6.6 0 00-.41-.569L9 3m0 16V3M15 5l5.21-1.737a.6.6 0 01.79.57V15M17.121 22.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122l2.121 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMapXmark);
export default ForwardRef;
