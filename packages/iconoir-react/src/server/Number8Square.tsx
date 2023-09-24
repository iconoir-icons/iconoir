import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNumber8Square = (
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
      d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16c-1.38 0-2.5-.5-2.5-2s1.12-2 2.5-2 2.5.5 2.5 2-1.12 2-2.5 2ZM12 8c-1.38 0-2.5.5-2.5 2s1.12 2 2.5 2 2.5-.5 2.5-2-1.12-2-2.5-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumber8Square);
export default ForwardRef;
