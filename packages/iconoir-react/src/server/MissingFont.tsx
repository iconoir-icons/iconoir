import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMissingFont = (
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
      d="m3.469 18.374 1.064-2.341m9.58 2.341-1.064-2.341m0 0L8.79 6.664l-4.258 9.367m8.516 0H4.533M15.178 8.794c0-3.725 5.854-3.725 5.854 0 0 2.661-2.66 2.13-2.66 5.322M18.371 18.385l.01-.012"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMissingFont);
export default ForwardRef;
