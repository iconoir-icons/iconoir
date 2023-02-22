import * as React from "react";
function SvgFillColor(
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
        d="M2.636 10.293l7.071-7.071 8.485 8.485-7.07 7.071a2 2 0 01-2.83 0l-5.656-5.657a2 2 0 010-2.828zM8.293 1.808l1.414 1.414"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3-1.656 0-2.988-1.345-3-3C17.01 17.992 20 15 20 15z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFillColor);
export default ForwardRef;
