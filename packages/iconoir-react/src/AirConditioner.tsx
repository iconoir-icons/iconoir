import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAirConditioner(
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
        d="M22 3.6V11H2V3.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6zM18 7h1M2 11l.79 2.584A2 2 0 004.702 15H6M22 11l-.79 2.584A2 2 0 0119.298 15H18M9.5 14.5s0 7-3.5 7M14.5 14.5s0 7 3.5 7M12 14.5v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAirConditioner);
export default ForwardRef;
