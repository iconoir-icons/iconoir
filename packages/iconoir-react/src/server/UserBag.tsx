import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUserBag = (
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
      d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 18a7 7 0 0 1 11.33-5.5M21.364 16.707l.296 2A2 2 0 0 1 19.682 21h-3.364a2 2 0 0 1-1.978-2.293l.296-2A2 2 0 0 1 16.614 15h2.772a2 2 0 0 1 1.978 1.707ZM17 13h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserBag);
export default ForwardRef;
