import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVials = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 21H3M9 12H5M19 12h-4M7 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2ZM17 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVials);
export default ForwardRef;
