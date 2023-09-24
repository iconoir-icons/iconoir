import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHdDisplay = (
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
      d="M6 8.5V12m0 3.5V12m0 0h4.5m0 0V8.5m0 3.5v3.5M14 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5V12Z"
    />
    <path
      stroke="currentColor"
      d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHdDisplay);
export default ForwardRef;
