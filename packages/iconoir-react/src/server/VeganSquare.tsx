import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVeganSquare = (
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
      d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 10.5C12.75 12.382 11 17 11 17s-2.5-6.5-5-8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.015 6.73.297 3.08c.192 1.998-1.306 3.777-3.304 3.97-1.96.188-3.736-1.245-3.925-3.205a3.566 3.566 0 0 1 3.208-3.892l3.284-.316a.404.404 0 0 1 .44.363Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVeganSquare);
export default ForwardRef;
