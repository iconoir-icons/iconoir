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
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M16.68 12.384l-4.22 5.063a.6.6 0 01-.92 0l-4.22-5.063a.6.6 0 010-.768l4.22-5.063a.6.6 0 01.92 0l4.22 5.063a.6.6 0 010 .768zM4 12H2M22 12h-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyframeAlignHorizontal);
export default ForwardRef;
