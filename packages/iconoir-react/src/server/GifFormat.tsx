import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGifFormat = (
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
      d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 15V9h3M15.5 12h2M12 15V9M8.5 9h-3v6h3v-2.4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGifFormat);
export default ForwardRef;
