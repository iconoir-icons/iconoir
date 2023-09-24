import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHourglass = (
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
      d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7Zm0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7ZM5 2h14M5 22h14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHourglass);
export default ForwardRef;
