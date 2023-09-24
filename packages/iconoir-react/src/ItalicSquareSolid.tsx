import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgItalicSquareSolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zM16 6.75h-1.46l-3.5 10.5H12a.75.75 0 010 1.5H8a.75.75 0 010-1.5h1.46l3.5-10.5H12a.75.75 0 010-1.5h4a.75.75 0 010 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgItalicSquareSolid);
export default ForwardRef;
