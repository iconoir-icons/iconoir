import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBrainResearch(
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
        d="M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M7.238 5.565A2.5 2.5 0 1112 4.5V20M8 20a2 2 0 104 0M12 7a3 3 0 003 3M20.61 8.969A3.99 3.99 0 0122 12c0 .703-.181 1.364-.5 1.938M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M14 22a2 2 0 01-2-2M20.5 20.5L22 22M16 18.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrainResearch);
export default ForwardRef;
