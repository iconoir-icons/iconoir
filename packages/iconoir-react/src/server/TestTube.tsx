import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTestTube = (
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
      d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426 1.966-1.065-6.553-4.588-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
