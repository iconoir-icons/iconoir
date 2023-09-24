import * as React from "react";
function SvgNumber0SquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zM10.25 10c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-4zm1.25-2.75A2.75 2.75 0 008.75 10v4a2.75 2.75 0 002.75 2.75h1A2.75 2.75 0 0015.25 14v-4a2.75 2.75 0 00-2.75-2.75h-1z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber0SquareSolid);
export default ForwardRef;
