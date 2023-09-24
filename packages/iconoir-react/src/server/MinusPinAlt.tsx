import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMinusPinAlt = (
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
      d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 19h6"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMinusPinAlt);
export default ForwardRef;
