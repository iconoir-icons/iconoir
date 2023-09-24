import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPrintingPage = (
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
      d="M17.571 18H20.4a.6.6 0 0 0 .6-.6V11a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6.4a.6.6 0 0 0 .6.6h2.829M8 7V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7"
    />
    <path
      stroke="currentColor"
      d="M6.098 20.315 6.428 18l.498-3.485A.6.6 0 0 1 7.52 14h8.96a.6.6 0 0 1 .594.515L17.57 18l.331 2.315a.6.6 0 0 1-.594.685H6.692a.6.6 0 0 1-.594-.685Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17 10.01.01-.011"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPrintingPage);
export default ForwardRef;
