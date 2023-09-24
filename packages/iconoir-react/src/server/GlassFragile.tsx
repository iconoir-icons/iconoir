import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGlassFragile = (
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
      d="M8 22h4m4 0h-4m0 0v-7M6.578 10.048C7.783 12.682 12 15 12 15s4.217-2.318 5.422-4.952c1.3-2.845 0-8.048 0-8.048H6.578s-1.3 5.203 0 8.048Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.5 2-2 4h3l-2 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGlassFragile);
export default ForwardRef;
