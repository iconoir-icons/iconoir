import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAppleImac2021Side = (
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
      d="M6 22h2m6 0H8m0 0 2-8.5m0 0L7 2m3 11.5 1.5 5.5M17 22h1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAppleImac2021Side);
export default ForwardRef;
