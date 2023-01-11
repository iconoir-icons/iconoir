import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAccessibilitySign(
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
        d="M12 16h3.889l1.555 2.5H19M12 8.5V11m0 5v-5m0 0h3.889M12 6.5a2 2 0 110-4 2 2 0 010 4zM14.882 19.516A5.5 5.5 0 118.678 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAccessibilitySign);
export default ForwardRef;
