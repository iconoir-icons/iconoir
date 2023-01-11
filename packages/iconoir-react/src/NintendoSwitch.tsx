import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNintendoSwitch(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M2 17V7a4 4 0 014-4h3.9a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H6a4 4 0 01-4-4z"
        stroke="currentColor"
      />
      <path
        d="M6.5 8a1 1 0 100-2 1 1 0 000 2zM17.5 14a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17V7a4 4 0 00-4-4h-3.9a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H18a4 4 0 004-4z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNintendoSwitch);
export default ForwardRef;
