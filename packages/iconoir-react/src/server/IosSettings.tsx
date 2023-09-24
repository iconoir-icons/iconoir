import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIosSettings = (
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
      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM18 12h-6M9 6.803 12 12m0 0-3 5.197"
    />
    <path
      stroke="currentColor"
      strokeDasharray="1 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIosSettings);
export default ForwardRef;
