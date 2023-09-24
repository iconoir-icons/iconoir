import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCropRotateTr = (
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
      d="M20 10V7a4 4 0 0 0-4-4h-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.5 7.5 20 10l-2.5-2.5M14 17v-6a1 1 0 0 0-1-1H7M2 10h2M14 22v-2M4 8v11a1 1 0 0 0 1 1h11"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCropRotateTr);
export default ForwardRef;
