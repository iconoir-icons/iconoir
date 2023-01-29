import * as React from "react";
function SvgLabel(
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
        d="M3 17.4V6.6a.6.6 0 01.6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 010 .666l-3.6 5.4a.6.6 0 01-.5.267H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLabel);
export default ForwardRef;
