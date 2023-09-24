import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHammer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.634 11.056 2.148 19.54l2.122 2.121 8.485-8.485"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10.634 11.056 1.414-1.415s.354-3.182-3.182-6.717l1.06-1.06 8.486 5.656-1.06 1.06 1.413 1.415 1.061-1.06 2.475 2.474-4.95 4.95-2.475-2.475 1.061-1.06-1.414-1.415-1.768 1.768-2.121-2.121Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHammer);
export default ForwardRef;
