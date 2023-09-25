import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSwipeRightGesture = (
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
      d="M14 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm0 0h8m0 0-3-3m3 3-3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeRightGesture);
export default ForwardRef;
