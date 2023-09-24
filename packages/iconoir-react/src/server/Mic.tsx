import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={6} height={12} x={9} y={2} stroke="currentColor" rx={3} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;
