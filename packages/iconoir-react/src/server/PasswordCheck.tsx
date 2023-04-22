import * as React from "react";
function SvgPasswordCheck(
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
        d="M21 13V8a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h7M14.5 18.5l2 2 4-4M12 11.01l.01-.011M16 11.01l.01-.011M8 11.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPasswordCheck);
export default ForwardRef;
