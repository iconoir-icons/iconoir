import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHexagonDice = (
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
      d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52L11.7 1.174Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 15H7l5-8 5 8Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M2.5 6.5 12 7M2.5 6.5 7 15M21.5 6.5 17 15M21.5 6.5 12 7V1M21.5 17.5 17 15M2.5 17.5 7 15M7 15l5 8 5-8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHexagonDice);
export default ForwardRef;
