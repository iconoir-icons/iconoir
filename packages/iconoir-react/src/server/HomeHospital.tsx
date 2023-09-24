import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHomeHospital = (
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
      d="M3 9.5 12 4l9 5.5M19 13v6.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V13"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.667 17h-3.334v-2.333H8v-3.334h2.333V9h3.334v2.333H16v3.334h-2.333V17Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeHospital);
export default ForwardRef;
