import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCoinsSwap = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M9.019 9A6.5 6.5 0 1 1 15 14.981"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 22a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM22 17a3 3 0 0 1-3 3h-2m0 0 2-2m-2 2 2 2M2 7a3 3 0 0 1 3-3h2m0 0L5 6m2-2L5 2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCoinsSwap);
export default ForwardRef;
