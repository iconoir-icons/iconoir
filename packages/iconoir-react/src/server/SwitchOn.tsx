import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSwitchOn = (
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
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path stroke="currentColor" d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwitchOn);
export default ForwardRef;
