import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgKeyframeAlignHorizontal(
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
        d="M15.7 12.375l-3.231 4.04a.6.6 0 01-.938 0L8.3 12.374a.6.6 0 010-.75l3.231-4.04a.6.6 0 01.938 0l3.231 4.04a.6.6 0 010 .75zM4 12H2M22 12h-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyframeAlignHorizontal);
export default ForwardRef;
