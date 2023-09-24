import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTimeZone = (
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2.05S16 6 16 12M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12M2.63 8.5h18.74M19 17.5V19h1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTimeZone);
export default ForwardRef;
