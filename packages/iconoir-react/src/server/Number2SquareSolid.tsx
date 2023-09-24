import * as React from "react";
function SvgNumber2SquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm6.65 8.15c0-.94.725-1.65 1.558-1.65.832 0 1.557.71 1.557 1.65 0 .321-.086.618-.233.868-.462.789-1.454 1.81-2.394 2.676a35.726 35.726 0 01-1.671 1.442l-.025.02-.006.005-.002.001A.75.75 0 009.5 16.75h5a.75.75 0 000-1.5h-2.968l.222-.202c.936-.863 2.084-2.018 2.673-3.021a3.21 3.21 0 00.438-1.627c0-1.712-1.341-3.15-3.057-3.15S8.75 8.688 8.75 10.4v.4a.75.75 0 001.5 0v-.4z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber2SquareSolid);
export default ForwardRef;
