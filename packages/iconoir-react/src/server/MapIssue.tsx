import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMapIssue = (
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
      d="m9 19-5.21 1.737a.6.6 0 0 1-.79-.57V5.433a.6.6 0 0 1 .41-.569L9 3m0 16 5.21 1.737a.6.6 0 0 0 .79-.57V5.433a.6.6 0 0 0-.41-.569L9 3m0 16V3M15 5l5.21-1.737a.6.6 0 0 1 .79.57V15M17.121 22.364l2.122-2.121m0 0 2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122 2.121 2.121"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMapIssue);
export default ForwardRef;
