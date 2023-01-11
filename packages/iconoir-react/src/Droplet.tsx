import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDroplet(
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
        d="M19 13.8C19 9.824 12 3 12 3S5 9.824 5 13.8c0 3.976 3.134 7.2 7 7.2s7-3.224 7-7.2z"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDroplet);
export default ForwardRef;
