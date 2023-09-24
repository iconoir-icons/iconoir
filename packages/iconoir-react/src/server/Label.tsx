import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLabel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 17.4V6.6a.6.6 0 0 1 .6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 0 1 0 .666l-3.6 5.4a.6.6 0 0 1-.5.267H3.6a.6.6 0 0 1-.6-.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLabel);
export default ForwardRef;
