import * as React from "react";
function SvgNumber4SquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zM14.25 8a.75.75 0 00-1.33-.475l-4.5 5.5A.75.75 0 009 14.25h3.75V16a.75.75 0 001.5 0v-1.75H15a.75.75 0 000-1.5h-.75V8zm-1.5 2.101v2.649h-2.167l2.167-2.649z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber4SquareSolid);
export default ForwardRef;
