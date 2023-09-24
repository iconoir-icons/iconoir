import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMediaVideoFolder = (
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
      d="M22 12.6v7.8a.6.6 0 0 1-.6.6h-7.8a.6.6 0 0 1-.6-.6v-7.8a.6.6 0 0 1 .6-.6h7.8a.6.6 0 0 1 .6.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.918 14.574a.6.6 0 0 0-.918.508v2.835a.6.6 0 0 0 .918.51l2.268-1.418a.6.6 0 0 0 0-1.018l-2.268-1.417ZM2 10V3.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V9M2 10v8.4a.6.6 0 0 0 .6.6H10m-8-9h8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMediaVideoFolder);
export default ForwardRef;
