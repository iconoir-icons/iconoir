import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOrangeSlice = (
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
      d="m10.613 10.11 7.778-7.777c4.295 4.296 4.295 11.26 0 15.556-4.296 4.296-11.261 4.296-15.557 0l7.779-7.778Zm0 0-.354 8.133m.354-8.132h7.778m-7.778 0 5.303 5.303"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgOrangeSlice);
export default ForwardRef;
