import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLineSpace = (
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
      d="M11 6h10M11 12h10M11 18h10M5 19V5m0 14-2-2.5M5 19l2-2.5M5 5 3 7m2-2 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLineSpace);
export default ForwardRef;
