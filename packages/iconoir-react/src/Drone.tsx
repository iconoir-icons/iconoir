import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDrone = (
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
        d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 4.5 9 8M4.5 19.5l5-4M19.5 4.5 15 8M19.5 19.5l-5-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDrone);
export default ForwardRef;
