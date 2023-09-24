import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPercentage = (
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
      d="M17 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM19 5 5 19"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPercentage);
export default ForwardRef;
