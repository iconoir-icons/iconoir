import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAntenna = (
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
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 1s1.5 1 1.5 3S16 7 16 7M8 1S6.5 2 6.5 4 8 7 8 7M7 23l1.111-4M17 23l-1.111-4M14.5 14 12 5l-2.5 9m5 0h-5m5 0 1.389 5M9.5 14l-1.389 5m0 0h7.778"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAntenna);
export default ForwardRef;
