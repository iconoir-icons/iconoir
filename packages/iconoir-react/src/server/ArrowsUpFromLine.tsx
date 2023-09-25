import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowsUpFromLine = (
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
      d="M3 20h18M6 17V4m0 0L2 8m4-4 4 4M18 17V4m0 0-4 4m4-4 4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowsUpFromLine);
export default ForwardRef;
