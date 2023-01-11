import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDragHandGesture(
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
        d="M7 10.5l-2.004 2.672a2 2 0 00.126 2.552l3.784 4.128c.378.413.912.648 1.473.648H15c2.4 0 4-1.5 4-4 0 0 0 0 0 0V7.929M16 8.5v-.571c0-2.286 3-2.286 3 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8.5V7.027m0-.527v.527M16 8.5V7.93v-.902c0-2.286-3-2.286-3 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8.5V7.027c0-2.286 3-2.286 3 0V8.5M10 8.5v-2c0-2.286 3-2.286 3 0 0 0 0 0 0 0v2M7 13.5v-7A1.5 1.5 0 018.5 5v0c.828 0 1.5.555 1.5 1.384V8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDragHandGesture);
export default ForwardRef;
