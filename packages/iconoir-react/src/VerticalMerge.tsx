import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgVerticalMerge(
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
        d="M12 2v8m0 0l3.5-3.5M12 10L8.5 6.5M12 22v-8m0 0l3.5 3.5M12 14l-3.5 3.5M3 14h18M3 10h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgVerticalMerge);
export default ForwardRef;
