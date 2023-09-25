import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSafeOpen = (
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
        d="M3 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
      />
      <path
        stroke="currentColor"
        d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15C6.672 15 6 13.657 6 12s.672-3 1.5-3S9 10.343 9 12s-.672 3-1.5 3ZM13 14v-4M8.5 9.5l1-1M6.5 9.5l-1-1M5.5 15.5l1-1M9.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSafeOpen);
export default ForwardRef;
