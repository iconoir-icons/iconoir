import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgShieldAlt(
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
        d="M3.571 8l-.44-3.084A1 1 0 013.904 3.8l7.662-1.703a2 2 0 01.868 0L20.096 3.8a1 1 0 01.773 1.117L20.43 8M3.57 8H20.43M3.57 8c.309 2.16.69 4.822 1 7M20.43 8c-.309 2.16-.69 4.822-1 7m0 0L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18l-.429-3m14.858 0H4.57"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShieldAlt);
export default ForwardRef;
