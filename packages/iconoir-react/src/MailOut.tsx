import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMailOut = (
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
        d="m5 9 4.5 3L14 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 14h6m0 0-3-3m3 3-3 3"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMailOut);
export default ForwardRef;
