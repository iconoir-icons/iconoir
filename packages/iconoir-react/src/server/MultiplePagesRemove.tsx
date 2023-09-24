import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMultiplePagesRemove = (
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
      d="M7 2h9.5L21 6.5V19"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13M1.992 19h6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5v3.4a.6.6 0 0 0 .6.6H18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMultiplePagesRemove);
export default ForwardRef;
