import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSafeOpen(
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
        d="M3 19V5a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path d="M13 3h6a2 2 0 012 2v14a2 2 0 01-2 2h-6" stroke="currentColor" />
      <path
        d="M7.5 15C6.672 15 6 13.657 6 12s.672-3 1.5-3S9 10.343 9 12s-.672 3-1.5 3zM13 14v-4M8.5 9.5l1-1M6.5 9.5l-1-1M5.5 15.5l1-1M9.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSafeOpen);
export default ForwardRef;
