import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMicAdd = (
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
        d="M16.992 19h3m3 0h-3m0 0v-3m0 3v3"
      />
      <rect width={6} height={12} x={5} y={2} stroke="currentColor" rx={3} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M8 18v4m0 0H5m3 0h3"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMicAdd);
export default ForwardRef;
