import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNumber7SquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm5.9 5a.75.75 0 000 1.5h3.35c-.3.378-.637.828-.974 1.334C10.851 11.621 9.75 13.774 9.75 16a.75.75 0 001.5 0c0-1.775.899-3.621 1.874-5.084a18.4 18.4 0 011.752-2.225l.118-.124.03-.03.006-.006a.75.75 0 00-.53-1.281h-5z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber7SquareSolid);
export default ForwardRef;
