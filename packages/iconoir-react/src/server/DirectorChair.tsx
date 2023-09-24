import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDirectorChair = (
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
      d="M19 12 5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
    />
    <path stroke="currentColor" strokeLinejoin="round" d="M5 4h14M5 7h14" />
  </svg>
);
const ForwardRef = forwardRef(SvgDirectorChair);
export default ForwardRef;
