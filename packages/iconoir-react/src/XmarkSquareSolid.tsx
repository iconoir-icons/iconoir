import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgXmarkSquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm6.809 7.098a.75.75 0 00-1.06 1.061L10.938 12l-1.59 1.591a.75.75 0 001.06 1.06L12 13.062l1.591 1.59a.75.75 0 001.06-1.06L13.062 12l1.59-1.591a.75.75 0 00-1.06-1.06L12 10.938l-1.591-1.59z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgXmarkSquareSolid);
export default ForwardRef;
