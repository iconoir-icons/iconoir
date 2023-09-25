import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgConstrainedSurface = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#constrained-surface_svg__a)"
      >
        <path d="M3 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM21 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM21 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM13 12c0-1.246-1.159-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438.188.041.38.062.572.062" />
        <path d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.848 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.651 2.651 0 0 0-.572-.062M21 19V5M3 19V5M5 3h14M5 21h14" />
      </g>
      <defs>
        <clipPath id="constrained-surface_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgConstrainedSurface);
export default ForwardRef;
