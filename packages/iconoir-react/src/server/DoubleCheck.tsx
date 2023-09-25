import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDoubleCheck = (
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
      d="m1.5 12.5 4.076 4.076a.6.6 0 0 0 .848 0L9 14M16 7l-4 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m7 12 4.576 4.576a.6.6 0 0 0 .848 0L22 7"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDoubleCheck);
export default ForwardRef;
