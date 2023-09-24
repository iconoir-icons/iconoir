import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRoundedMirror = (
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
      d="M20 10v4a8 8 0 1 1-16 0v-4a8 8 0 1 1 16 0ZM17.5 4.5 13 8M19 7l-7.5 6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRoundedMirror);
export default ForwardRef;
