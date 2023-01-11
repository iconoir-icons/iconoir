import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPenTablet(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M22 5v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2zM2 12h4M6 3v18"
        stroke="currentColor"
      />
      <path
        d="M15.5 11.5l-3.5 3M17 10.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPenTablet);
export default ForwardRef;
