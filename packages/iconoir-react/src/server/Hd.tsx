import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 7v5m0 5v-5m0 0h7m0 0V7m0 5v5M13 12V7c4 0 8 0 8 5s-4 5-8 5v-5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHd);
export default ForwardRef;
