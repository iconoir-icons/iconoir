import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGitPullRequestClosed = (
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
      d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 11v6M18 17V7s0-2-2-2h-4M4 7.243 6.121 5.12m0 0L8.243 3M6.12 5.121 4 3m2.121 2.121 2.122 2.122"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGitPullRequestClosed);
export default ForwardRef;
