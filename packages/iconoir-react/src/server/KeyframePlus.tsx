import * as React from "react";
function SvgKeyframePlus(
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
        d="M16 5h3m3 0h-3m0 0V2m0 3v3M16.819 14.329l-5.324 5.99a2 2 0 01-2.99 0l-5.324-5.99a2 2 0 010-2.658l5.324-5.99a2 2 0 012.99 0l5.324 5.99a2 2 0 010 2.658z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyframePlus);
export default ForwardRef;
