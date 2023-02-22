import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeIllustrator(
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
        d="M21 7v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4zM16 12v4M16 9v.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16l1.125-3M13 16l-1.125-3m-3.75 0L10 8l1.875 5m-3.75 0h3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeIllustrator);
export default ForwardRef;
