import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNoCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.623 5.248A9.964 9.964 0 0 0 2 12c0 5.523 4.477 10 10 10a9.962 9.962 0 0 0 6.615-2.5M21.302 15.678A9.974 9.974 0 0 0 22 12c0-5.523-4.477-10-10-10-1.231 0-2.41.223-3.5.63"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15c.644.86 1.843 1.35 3 1.391 1.114.04 2.19-.336 2.697-1.198M12 16.391V18.5M9.5 9.5c0 1.181.852 1.665 1.886 2M15 8.5c-.685-.685-1.891-1.161-3-1.191V5.5M3 3l18 18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNoCoin);
export default ForwardRef;
