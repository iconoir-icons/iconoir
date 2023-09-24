import * as React from "react";
function SvgWhiteFlagSolid(
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
        d="M20.94 4.654l-.89 9.8a.6.6 0 01-.598.546H5l.95-10.454A.6.6 0 016.548 4h13.795a.6.6 0 01.598.654z"
        fill="currentColor"
      />
      <path
        d="M5 15l.95-10.454A.6.6 0 016.548 4h13.795a.6.6 0 01.598.654l-.891 9.8a.6.6 0 01-.598.546H5zm0 0l-.6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWhiteFlagSolid);
export default ForwardRef;
