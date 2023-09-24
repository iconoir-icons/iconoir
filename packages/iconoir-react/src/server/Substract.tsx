import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSubstract = (
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
      d="M15 3.6v10.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6ZM13.5 21h3M21 13.5v3M21 19.5v.9a.6.6 0 0 1-.6.6h-.9M10.5 21h-.9a.6.6 0 0 1-.6-.6v-.9M19.5 9h.9a.6.6 0 0 1 .6.6v.9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 9H9.6a.6.6 0 0 0-.6.6v6.9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSubstract);
export default ForwardRef;
