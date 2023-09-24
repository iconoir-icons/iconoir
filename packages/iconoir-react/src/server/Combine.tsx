import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCombine = (
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
      d="M21 9.6v10.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 3.6v10.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCombine);
export default ForwardRef;
