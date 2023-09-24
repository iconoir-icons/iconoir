import * as React from "react";
function SvgAlignHorizontalCentersSolid(
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
        d="M12 22V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 16H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlignHorizontalCentersSolid);
export default ForwardRef;
