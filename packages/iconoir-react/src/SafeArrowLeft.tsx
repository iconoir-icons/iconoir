import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSafeArrowLeft = (
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
      <path
        stroke="currentColor"
        d="M3 19V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3h7a2 2 0 0 1 2 2v.5M12 21h7a2 2 0 0 0 2-2v-.5M8.5 15C7.672 15 7 13.657 7 12s.672-3 1.5-3 1.5 1.343 1.5 3-.672 3-1.5 3ZM9.5 9.5l1-1M7.5 9.5l-1-1M6.5 15.5l1-1M10.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2M22 12h-7m0 0 3.5-3.5M15 12l3.5 3.5"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSafeArrowLeft);
export default ForwardRef;
