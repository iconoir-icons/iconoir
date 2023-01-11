import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgShoppingBagArrowUp(
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
        d="M16.5 21h2.169a2 2 0 001.976-2.304l-1.384-9A2 2 0 0017.284 8H6.716a2 2 0 00-1.977 1.696l-1.385 9A2 2 0 005.331 21H7.5M12 19v-7m0 0l3 3m-3-3l-3 3M14 5a2 2 0 10-4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShoppingBagArrowUp);
export default ForwardRef;
