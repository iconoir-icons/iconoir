import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNpm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 8h22v7H11v2H7.5v-2H1V8ZM7.5 8v7M13.5 8v7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M18 11v4M5 11v4M11 11v1M20.5 11v4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNpm);
export default ForwardRef;
