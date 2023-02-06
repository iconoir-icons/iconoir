import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgKeyframePosition(
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
        d="M16.68 9.384l-4.22 5.063a.6.6 0 01-.92 0L7.32 9.384a.6.6 0 010-.768l4.22-5.063a.6.6 0 01.92 0l4.22 5.063a.6.6 0 010 .768zM3 20h9m9 0h-9m0 0v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyframePosition);
export default ForwardRef;
