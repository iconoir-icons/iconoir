import * as React from "react";
function SvgLoft3D(
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
        d="M22 17c-9 0-11 6-20 6M22 1C13 1 11 7 2 7M12 16.5v-9m0 9l2.5-2.5M12 16.5L9.5 14M12 7.5l2.5 2.5M12 7.5L9.5 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLoft3D);
export default ForwardRef;
