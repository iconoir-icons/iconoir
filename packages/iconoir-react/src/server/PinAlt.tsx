import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPinAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPinAlt);
export default ForwardRef;
