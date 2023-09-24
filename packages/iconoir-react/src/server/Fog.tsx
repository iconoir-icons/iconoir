import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFog = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 14h6M9 22h6M7 18h10M3.5 17.382C2.188 16.707 1 15.388 1 13c0-4 3.333-5 5-5 0-2 0-6 6-6s6 4 6 6c1.667 0 5 1 5 5 0 2.388-1.188 3.707-2.5 4.382"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFog);
export default ForwardRef;
