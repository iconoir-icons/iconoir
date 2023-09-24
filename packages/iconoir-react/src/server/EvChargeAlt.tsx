import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEvChargeAlt = (
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
      d="m22 5-2 4-2-4M16 5h-2v4h2M14 7h1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M6 9v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M9 5.6V7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6ZM4 5V3M8 5V3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEvChargeAlt);
export default ForwardRef;
