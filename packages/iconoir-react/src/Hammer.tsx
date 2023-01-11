import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgHammer(
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
        d="M10.634 11.056L2.148 19.54l2.122 2.121 8.485-8.485"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.634 11.056l1.414-1.415s.354-3.182-3.182-6.717l1.06-1.06 8.486 5.656-1.06 1.06 1.413 1.415 1.061-1.06 2.475 2.474-4.95 4.95-2.475-2.475 1.061-1.06-1.414-1.415-1.768 1.768-2.121-2.121z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHammer);
export default ForwardRef;
