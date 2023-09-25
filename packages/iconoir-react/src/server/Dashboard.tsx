import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDashboard = (
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
      d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8 1.343 3.2 3 3.2 3-1.433 3-3.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v4M3.5 7.5l3 3M17.5 10.5l3-3M2 17h4M18 17h4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDashboard);
export default ForwardRef;
