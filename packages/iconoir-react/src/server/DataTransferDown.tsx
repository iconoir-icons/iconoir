import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDataTransferDown = (
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
      d="M17 20v-1M17 15v-1M7 4v16m0 0-3-3m3 3 3-3M17 10V4m0 0-3 3m3-3 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDataTransferDown);
export default ForwardRef;
