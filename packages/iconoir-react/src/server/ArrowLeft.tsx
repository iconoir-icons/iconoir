import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowLeft = (
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
      d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
