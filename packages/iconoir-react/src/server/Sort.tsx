import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 14H2M8 10H2M6 6H2M12 18H2M19 20V4m0 16 3-3m-3 3-3-3m3-13 3 3m-3-3-3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
