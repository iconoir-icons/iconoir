import * as React from "react";
function SvgPinSlash(
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
        d="M9.5 14.5L3 21M7.676 7.89l-.979-.102L5 9.485l9.193 9.193 1.697-1.697-.102-.981m-4.303-9l3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPinSlash);
export default ForwardRef;
