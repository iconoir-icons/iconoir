import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgUserLove(
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
        d="M12 12a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.823-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.233 0l.106.107.106-.107A2.277 2.277 0 0122 17.28z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5 20v-1a7 7 0 0110-6.326"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUserLove);
export default ForwardRef;
