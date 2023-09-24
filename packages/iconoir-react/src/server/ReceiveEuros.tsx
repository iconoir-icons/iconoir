import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgReceiveEuros = (
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
      d="M21 12h-8m0 0 3.84-4M13 12l3.84 4M11 7.503A4.746 4.746 0 0 0 8.87 7C6.18 7 4 9.239 4 12s2.18 5 4.87 5c.764 0 1.487-.18 2.13-.503M3 11h6M3 13h6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceiveEuros);
export default ForwardRef;
