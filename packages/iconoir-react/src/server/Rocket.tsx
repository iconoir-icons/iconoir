import * as React from "react";
function SvgRocket(
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
        d="M16.061 10.404L14 17h-4l-2.061-6.596a6 6 0 01.998-5.484l2.59-3.315a.6.6 0 01.946 0l2.59 3.315a6 6 0 01.998 5.484zM10 20c0 2 2 3 2 3s2-1 2-3M8.5 12.5C5 15 7 19 7 19l3-2M15.931 12.5c3.5 2.5 1.5 6.5 1.5 6.5l-3-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11a2 2 0 110-4 2 2 0 010 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRocket);
export default ForwardRef;
