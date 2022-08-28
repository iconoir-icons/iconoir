import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgSpiral(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M3.5 6.004C3.5 7.808 6.357 9 11.5 9c7 0 8-2.996 8-2.996S18.5 3 11.5 3c-5.143 0-8 1.2-8 3.004zM3.5 12.004c0 1.804 2.857 2.996 8 2.996 7 0 8-2.996 8-2.996S18.5 9 11.5 9c-5.143 0-8 1.2-8 3.004zM3.5 18.004c0 1.804 2.857 2.996 8 2.996 7 0 8-2.996 8-2.996S18.5 15 11.5 15c-5.143 0-8 1.2-8 3.004zM19.5 12s1-.975 1-3-1-3-1-3M20.5 4c0 1.35-1 2-1 2M19.5 18s1-.975 1-3-1-3-1-3M20.5 20c0-1.35-1-2-1-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSpiral);
export default ForwardRef;
