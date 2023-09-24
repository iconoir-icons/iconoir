import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7 16.01.01-.011M17 16.01l.01-.011M3 12h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7ZM21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 8h10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20M15.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;
