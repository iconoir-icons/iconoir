import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Svg3DEllipseThreePts = (
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
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 22h8M5 22V2"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="currentColor"
      strokeDasharray="3 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10 0 3.271-1.256 6.175-3.2 8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.2 20A9.098 9.098 0 0 1 7 18.615"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Svg3DEllipseThreePts);
export default ForwardRef;
