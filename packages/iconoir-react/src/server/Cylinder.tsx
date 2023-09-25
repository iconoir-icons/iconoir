import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCylinder = (
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
      d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3ZM12 16c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 5v14M4 5v14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCylinder);
export default ForwardRef;
