import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAirplaneRotation = (
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
        strokeMiterlimit={1.5}
        d="M9.879 14.122a3 3 0 1 0 4.242-4.243 3 3 0 0 0-4.242 4.243Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M4.37 16.773A8.956 8.956 0 0 1 3.002 12c0-4.236 2.934-7.792 6.878-8.747A8.998 8.998 0 0 1 12 3.002M19.715 7.367A8.953 8.953 0 0 1 20.999 12c0 3.806-2.368 7.063-5.709 8.378-1.02.4-2.13.621-3.29.621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M14.121 9.88s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.865 4.242-1.415 1.377 1.378.015 2.81-1.414 4.243-1.402 1.406-4.243 1.414-4.243 1.414ZM9.879 14.12s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.865-4.242 1.415-1.377-1.378-.015-2.81 1.414-4.243 1.402-1.406 4.243-1.414 4.243-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAirplaneRotation);
export default ForwardRef;
