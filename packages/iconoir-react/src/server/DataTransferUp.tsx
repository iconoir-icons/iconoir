import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDataTransferUp = (
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
      d="M7 4v1M7 9v1M17 20V4m0 0 3 3m-3-3-3 3M7 14v6m0 0 3-3m-3 3-3-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDataTransferUp);
export default ForwardRef;
