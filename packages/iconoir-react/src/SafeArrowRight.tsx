import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSafeArrowRight(
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
        d="M3 19V5a2 2 0 012-2h7a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M12 3h7a2 2 0 012 2v.5M12 21h7a2 2 0 002-2v-.5M8.5 15C7.672 15 7 13.657 7 12s.672-3 1.5-3 1.5 1.343 1.5 3-.672 3-1.5 3zM9.5 9.5l1-1M7.5 9.5l-1-1M6.5 15.5l1-1M10.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2M15 12h7m0 0l-3.5-3.5M22 12l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSafeArrowRight);
export default ForwardRef;
