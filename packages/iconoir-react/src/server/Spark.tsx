import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSpark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      d="M3 12c6.268 0 9-2.637 9-9 0 6.363 2.713 9 9 9-6.287 0-9 2.713-9 9 0-6.287-2.732-9-9-9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSpark);
export default ForwardRef;
