import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgGas(
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
        d="M9 8a3 3 0 013-3v0a3 3 0 013 3v13.4a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6V8zM9 11h6M12 5V2m0 0h-1m1 0h1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgGas);
export default ForwardRef;
