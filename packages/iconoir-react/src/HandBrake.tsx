import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgHandBrake(
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
        d="M12 16v-4M12 9V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={12} r={8} stroke="currentColor" />
      <path
        d="M3.953 4.5A10.961 10.961 0 001 12c0 2.899 1.121 5.535 2.953 7.5M20.047 4.5A10.962 10.962 0 0123 12c0 2.899-1.121 5.535-2.953 7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHandBrake);
export default ForwardRef;
