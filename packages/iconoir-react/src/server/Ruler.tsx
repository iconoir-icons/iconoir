import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 7V2.6a.6.6 0 0 0-.6-.6H8.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6h6.8a.6.6 0 0 0 .6-.6V17m0-10h-3m3 0v5m0 0h-3m3 0v5m0 0h-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;
