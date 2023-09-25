import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMotorcycle = (
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 15l-3-9 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 8.5h-4.5l-4.5 3M5.5 15.5H12l1-2.5 3.5-4.5M8.5 10c-2-1.5-5-1.5-7 0M19 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMotorcycle);
export default ForwardRef;
