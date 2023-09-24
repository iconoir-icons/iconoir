import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEthereumRotateOut = (
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
      d="M21.168 8A10.003 10.003 0 0 0 12 2C6.815 2 2.55 5.947 2.05 11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20M7 12l5 7 5-7M7 12l5-7m-5 7 5 1m0-8 5 7m-5-7v8m5-1-5 1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEthereumRotateOut);
export default ForwardRef;
