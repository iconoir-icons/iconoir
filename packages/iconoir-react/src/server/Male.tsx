import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMale = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.232 9.747a6 6 0 1 0-8.465 8.506 6 6 0 0 0 8.465-8.506Zm0 0L20 4m0 0h-4m4 0v4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMale);
export default ForwardRef;
