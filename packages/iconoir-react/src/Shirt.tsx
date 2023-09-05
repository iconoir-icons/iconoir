import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgShirt(
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
        d="M6 4h3s0 3 3 3 3-3 3-3h3m0 7v8.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V11M18 4l4.443 1.777a.6.6 0 01.334.78l-1.626 4.066a.6.6 0 01-.557.377H18M6 4L1.557 5.777a.6.6 0 00-.334.78l1.626 4.066a.6.6 0 00.557.377H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShirt);
export default ForwardRef;
