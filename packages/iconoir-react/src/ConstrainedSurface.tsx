import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgConstrainedSurface(
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
      <g
        clipPath="url(#constrained-surface_svg__clip0_3628_20527)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 23a2 2 0 110-4 2 2 0 010 4zM21 23a2 2 0 110-4 2 2 0 010 4zM3 5a2 2 0 110-4 2 2 0 010 4zM21 5a2 2 0 110-4 2 2 0 010 4zM13 12c0-1.246-1.159-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438.188.041.38.062.572.062" />
        <path d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.848 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.651 2.651 0 00-.572-.062M21 19V5M3 19V5M5 3h14M5 21h14" />
      </g>
      <defs>
        <clipPath id="constrained-surface_svg__clip0_3628_20527">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgConstrainedSurface);
export default ForwardRef;
