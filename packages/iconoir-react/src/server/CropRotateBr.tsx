import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCropRotateBr = (
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
      d="M14 20h3a4 4 0 0 0 4-4v-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 22.5 14 20l2.5-2.5M14 11V5a1 1 0 0 0-1-1H7M2 4h2M14 16v-2M4 2v11a1 1 0 0 0 1 1h11"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCropRotateBr);
export default ForwardRef;
