import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBounceRight = (
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
      d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15.5c3-1 5.5-.5 8 4.5.5-3 2-7.5 3.5-10"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBounceRight);
export default ForwardRef;
