import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlipReverse = (
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
      d="M9.5 12v2M5.75 12l-.938 2M7.625 20H9.5v-2M3.875 20H2l.938-2M7.625 8 9.5 4v4M14.5 20H22L14.5 4v16Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlipReverse);
export default ForwardRef;
