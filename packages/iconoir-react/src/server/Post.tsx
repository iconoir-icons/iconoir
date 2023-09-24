import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.906 17.505 5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m8.929 6.382 7.879 1.389M8.234 10.321l7.879 1.39M7.54 14.26l4.924.869"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPost);
export default ForwardRef;
