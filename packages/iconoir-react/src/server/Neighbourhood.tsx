import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNeighbourhood = (
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
      d="M11 21H4a2 2 0 0 1-2-2v-4.54a2 2 0 0 1 .963-1.71l3.5-2.122a2 2 0 0 1 2.074 0l3.5 2.121A2 2 0 0 1 13 14.46V19a2 2 0 0 1-2 2ZM6.5 10V6.46a2 2 0 0 1 .963-1.71l3.5-2.122a2 2 0 0 1 2.074 0l3.5 2.121a2 2 0 0 1 .963 1.71V10M16 21h4a2 2 0 0 0 2-2v-4.54a2 2 0 0 0-.963-1.71l-3.506-2.125a2 2 0 0 0-2.065-.005l-.633.38"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 21v-3.4a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V21M18 21v-3.4a.6.6 0 0 0-.6-.6H16"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNeighbourhood);
export default ForwardRef;
