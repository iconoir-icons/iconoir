import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUserScan = (
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
      d="M6 3H3v3M18 3h3v3M6 21H3v-3M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 21h3v-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserScan);
export default ForwardRef;
