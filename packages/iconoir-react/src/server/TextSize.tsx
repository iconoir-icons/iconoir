import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTextSize = (
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
      d="M3 7V5h14v2M10 5v14m0 0h2m-2 0H8M13 14v-2h8v2M17 12v7m0 0h-1.5m1.5 0h1.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTextSize);
export default ForwardRef;
