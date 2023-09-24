import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDogecoinRotateOut = (
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
      d="M21.168 8A10.003 10.003 0 0 0 12 2C6.815 2 2.55 5.947 2.05 11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"
    />
    <path
      stroke="currentColor"
      d="M10 16.402V7.598c0-.331.268-.599.6-.604 2.49-.035 5.9-.072 5.9 5.006s-3.41 5.042-5.9 5.006a.606.606 0 0 1-.6-.604Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDogecoinRotateOut);
export default ForwardRef;
