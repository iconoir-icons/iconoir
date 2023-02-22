import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgStrikethrough(
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
        d="M3 12h18M16.286 3h-6.218a4.068 4.068 0 00-1.286 7.927L12 12m-6 9h7.932a4.068 4.068 0 003.58-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStrikethrough);
export default ForwardRef;
