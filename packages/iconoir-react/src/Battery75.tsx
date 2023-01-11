import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBattery75(
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
        d="M23 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 16V8a2 2 0 012-2h15a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M4 14.4V9.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery75);
export default ForwardRef;
