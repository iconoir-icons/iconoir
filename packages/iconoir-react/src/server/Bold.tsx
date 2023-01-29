import * as React from "react";
function SvgBold(
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
        d="M12 11.667H8m4 0s3.333 0 3.333-3.334C15.333 5 12 5 12 5s0 0 0 0H8.6a.6.6 0 00-.6.6v6.067m4 0s4 0 4 3.666C16 19 12 19 12 19s0 0 0 0H8.6a.6.6 0 01-.6-.6v-6.733"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBold);
export default ForwardRef;
