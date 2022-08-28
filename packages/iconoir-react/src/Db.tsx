import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgDb(
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
      <path d="M5 12v6s0 3 7 3 7-3 7-3v-6" stroke="currentColor" />
      <path d="M5 6v6s0 3 7 3 7-3 7-3V6" stroke="currentColor" />
      <path
        d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3z"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDb);
export default ForwardRef;
