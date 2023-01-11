import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgRemoveKeyframe(
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
        d="M15 5h6M14.848 13.317l-4.343 4.963a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L7.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRemoveKeyframe);
export default ForwardRef;
