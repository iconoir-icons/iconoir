import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOrangeSliceAlt = (
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
      d="M13.39 10.11 5.61 2.334c-4.295 4.296-4.295 11.26 0 15.556 4.296 4.296 11.26 4.296 15.557 0l-7.778-7.778Zm0 0 .353 8.133m-.354-8.132H5.612m7.779 0-5.304 5.303"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgOrangeSliceAlt);
export default ForwardRef;
