import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGridRemove = (
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
      d="M14.871 19.121 16.993 17m2.121-2.121L16.993 17m0 0-2.122-2.121M16.993 17l2.121 2.121"
    />
    <path
      stroke="currentColor"
      d="M4 9.4V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6ZM4 19.4v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6ZM14 9.4V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGridRemove);
export default ForwardRef;
