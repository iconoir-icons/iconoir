import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 4v8.296C4 16.551 7.582 20 12 20s8-3.45 8-7.704V4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4h5.63v6.818C9.63 12.023 10.69 13 12 13s2.37-.977 2.37-2.182V4H20M9 8H4M20 8h-5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMagnet);
export default ForwardRef;
