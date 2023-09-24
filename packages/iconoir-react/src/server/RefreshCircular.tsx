import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRefreshCircular = (
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
    <circle cx={12} cy={12} r={10} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.494 9.722H16.4a.6.6 0 0 0 .6-.6V7.5M7.417 13.667C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.506 13.622H7.6a.6.6 0 0 0-.6.6V16.4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRefreshCircular);
export default ForwardRef;
