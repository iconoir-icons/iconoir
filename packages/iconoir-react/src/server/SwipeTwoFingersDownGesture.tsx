import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSwipeTwoFingersDownGesture = (
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
      d="M6.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 0v7m0 0L9 16.6M6.5 19 4 16.6M17.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 0v7m0 0 2.5-2.4M17.5 19 15 16.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeTwoFingersDownGesture);
export default ForwardRef;
