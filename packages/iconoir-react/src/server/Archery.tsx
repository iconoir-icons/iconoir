import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArchery = (
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
      d="M8 12h9m-9 0-2-2H2l2 2-2 2h4l2-2Zm9 0-2-2m2 2-2 2M16 22.5c2.761 0 5-4.701 5-10.5S18.761 1.5 16 1.5 11 6.201 11 12s2.239 10.5 5 10.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArchery);
export default ForwardRef;
