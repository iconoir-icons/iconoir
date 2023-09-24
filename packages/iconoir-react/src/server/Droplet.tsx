import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDroplet = (
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
      d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDroplet);
export default ForwardRef;
