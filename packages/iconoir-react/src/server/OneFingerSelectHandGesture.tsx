import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOneFingerSelectHandGesture = (
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
      d="m7.5 12-2.004 2.672a2 2 0 0 0 .126 2.552l3.784 4.128c.378.413.912.648 1.473.648H15.5c2.4 0 4-2 4-4 0 0 0 0 0 0V9.429M16.5 10v-.571c0-2.286 3-2.286 3 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 10V8.286c0-2.286 3-2.286 3 0V10M10.5 10V7.5c0-2.286 3-2.286 3 0 0 0 0 0 0 0V10M10.5 10V3.499A1.5 1.5 0 0 0 9 2v0a1.5 1.5 0 0 0-1.5 1.5V15"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgOneFingerSelectHandGesture);
export default ForwardRef;
