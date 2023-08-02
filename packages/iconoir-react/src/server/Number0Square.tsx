import * as React from "react";
function SvgNumber0Square(
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
        d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <path
        d="M9.5 14v-4a2 2 0 012-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber0Square);
export default ForwardRef;
