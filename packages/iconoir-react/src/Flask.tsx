import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgFlask(
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
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path d="M18.5 15h-13" stroke="currentColor" strokeLinejoin="round" />
      <path
        d="M16 4H8M9 4.5v5.76a2 2 0 01-.481 1.302L3.48 17.438A2 2 0 003 18.74V19a2 2 0 002 2h14a2 2 0 002-2v-.26a2 2 0 00-.482-1.302l-5.037-5.876A2 2 0 0115 10.26V4.5M12 9.01l.01-.011M11 2.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFlask);
export default ForwardRef;
