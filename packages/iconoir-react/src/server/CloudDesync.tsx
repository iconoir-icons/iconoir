import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCloudDesync = (
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
      d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607M16.42 19.487l-1.768 1.768a4 4 0 0 1-5.656 0l-.354-.353"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.067 21.962.353-2.475-2.475.354 2.122 2.121ZM7.58 16.902l1.768-1.768a4 4 0 0 1 5.657 0l.354.353"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.934 14.427-.353 2.475 2.474-.354-2.12-2.121Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudDesync);
export default ForwardRef;
