import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgReminderHandGesture(
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
        d="M17.5 12l2.004 2.672a2 2 0 01-.126 2.552l-3.784 4.127a1.998 1.998 0 01-1.473.649H9.5c-2.358 0-3.622-2.575-3.982-3.93a.55.55 0 01-.018-.143V9.43c0-2.286 3-2.286 3 0v.57"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 10V8.286c0-2.286-3-2.286-3 0V10M14.5 10V7.5c0-2.286-3-2.286-3 0 0 0 0 0 0 0V10M14.5 10V7.5 3.499A1.5 1.5 0 0116 2v0a1.5 1.5 0 011.5 1.5V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.563 6.5h2.062C20.5 6.5 21 6.078 21 5.25 21 4.422 20.5 4 19.625 4H12.25C11.56 4 11 4.56 11 5.25v.25a1 1 0 001 1v0"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReminderHandGesture);
export default ForwardRef;
