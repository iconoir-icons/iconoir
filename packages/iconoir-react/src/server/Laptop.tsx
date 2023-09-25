import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 19h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;
