import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMicMute = (
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
      d="m3 3 18 18M9 9v0a5 5 0 0 0 5 5v0m1-3.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMicMute);
export default ForwardRef;
