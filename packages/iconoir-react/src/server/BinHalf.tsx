import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBinHalf = (
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
      d="M3.04 4.294a.496.496 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.496.496 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944l-1.7-12.744Z"
    />
    <path
      stroke="currentColor"
      d="M3 5c2.571 2.667 15.429 2.667 18 0M11 18l3-3.5m0 0 5 2.5m-5-2.5 6-3M4.5 16l3.236-.462a.6.6 0 0 1 .469.133L11 18l3 3M8 15.5l2.615-3.05a.6.6 0 0 1 .84-.071L14 14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBinHalf);
export default ForwardRef;
