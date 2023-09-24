import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWindows = (
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
      d="M4 16.986V7.014a.6.6 0 0 1 .507-.593l14.8-2.313a.6.6 0 0 1 .693.593v14.598a.6.6 0 0 1-.693.593l-14.8-2.313A.6.6 0 0 1 4 16.986ZM4 12h16M10.5 5.5v13"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWindows);
export default ForwardRef;
