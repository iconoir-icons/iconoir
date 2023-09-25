import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExpandLines = (
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
      d="M18 2H6M18 22H6M12 14v5m0 0 3-3m-3 3-3-3M12 10V5m0 0 3 3m-3-3L9 8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgExpandLines);
export default ForwardRef;
