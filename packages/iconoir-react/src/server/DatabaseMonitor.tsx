import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDatabaseMonitor = (
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
      d="M4 6v6s0 3 7 3 7-3 7-3V6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3ZM11 21c-7 0-7-3-7-3v-6M18 22h3m-1.5-2.571h2.333V16h-4.666v3.429H19.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDatabaseMonitor);
export default ForwardRef;
