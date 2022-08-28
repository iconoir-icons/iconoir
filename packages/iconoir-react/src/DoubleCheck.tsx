import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgDoubleCheck(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7 12l4.576 4.576a.6.6 0 00.848 0L22 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDoubleCheck);
export default ForwardRef;
