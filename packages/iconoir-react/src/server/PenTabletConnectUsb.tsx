import * as React from "react";
function SvgPenTabletConnectUsb(
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
        d="M22 7V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12h4M6 3v18" stroke="currentColor" />
      <path
        d="M19.25 12H11M18.7 12l-.825 3h-1.65M17.6 12l-1.1-3h-1.925M22 12a1.37 1.37 0 00-1.375-1.364c-.76 0-1.375.61-1.375 1.364a1.37 1.37 0 001.375 1.364c.76 0 1.375-.61 1.375-1.364z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPenTabletConnectUsb);
export default ForwardRef;
