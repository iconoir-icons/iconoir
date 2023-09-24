import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEaseInControlPoint = (
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
      d="M3 20c8 0 18-16 18-16M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0h-2M12 20h-2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEaseInControlPoint);
export default ForwardRef;
