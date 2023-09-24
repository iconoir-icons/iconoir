import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCropRotateTl = (
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
      d="M10 4H7a4 4 0 0 0-4 4v4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 1.5 10 4 7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6M8 10h2M20 22v-2M10 8v11a1 1 0 0 0 1 1h11"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCropRotateTl);
export default ForwardRef;
