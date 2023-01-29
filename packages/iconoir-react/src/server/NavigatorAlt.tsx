import * as React from "react";
function SvgNavigatorAlt(
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" />
      <path
        clipRule="evenodd"
        d="M13.93 17.869c-.322.93-1.637.929-1.958-.001l-1.62-4.694-4.57-1.943c-.905-.385-.814-1.698.136-1.954L16.15 6.516a1.036 1.036 0 011.249 1.34L13.93 17.868z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNavigatorAlt);
export default ForwardRef;
