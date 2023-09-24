import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShoppingBagAdd = (
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
      d="m19.26 9.696 1.385 9A2 2 0 0 1 18.67 21H5.33a2 2 0 0 1-1.977-2.304l1.385-9A2 2 0 0 1 6.716 8h10.568a2 2 0 0 1 1.977 1.696ZM14 5a2 2 0 1 0-4 0M8.992 15h3m3 0h-3m0 0v-3m0 3v3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingBagAdd);
export default ForwardRef;
