import * as React from "react";
function SvgDropletHalf(
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
        d="M5.333 16A7.384 7.384 0 015 13.8C5 9.824 12 3 12 3s3.748 3.653 5.759 7.171M5.333 16c.904 2.9 3.547 5 6.667 5 3.866 0 7-3.224 7-7.2 0-1.067-.504-2.339-1.241-3.629M5.333 16l12.426-5.829"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDropletHalf);
export default ForwardRef;
