import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlugTypeL = (
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
      d="M10 3H5.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H10M11 7h2M11 12h2M11 17h2M14 3h4.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlugTypeL);
export default ForwardRef;
