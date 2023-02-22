import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeIndesign(
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
        d="M21 7v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4zM8.5 8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 12v3.4a.6.6 0 01-.6.6h-1.4a2 2 0 01-2-2v0a2 2 0 012-2h2zm0 0V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeIndesign);
export default ForwardRef;
