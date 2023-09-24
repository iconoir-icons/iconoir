import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAtSign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12M15 12v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAtSign);
export default ForwardRef;
