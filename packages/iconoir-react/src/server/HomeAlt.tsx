import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHomeAlt = (
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
      d="M10 18v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeAlt);
export default ForwardRef;
