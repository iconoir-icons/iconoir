import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgQuote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 12H5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V12Zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V12Zm0 0c0 2.5-1 4-4 5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgQuote);
export default ForwardRef;
