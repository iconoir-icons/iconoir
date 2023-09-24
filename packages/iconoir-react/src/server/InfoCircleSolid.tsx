import * as React from "react";
function SvgInfoCircleSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 10.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zM12.568 8a.75.75 0 10-1.115-1.003l-.01.011a.75.75 0 101.114 1.004l.01-.011z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgInfoCircleSolid);
export default ForwardRef;
