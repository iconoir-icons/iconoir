import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.5 20H2L9.5 4v16ZM20.125 20H22l-.938-2M16.375 20H14.5v-2M14.5 12v2M18.25 12l.938 2M16.375 8 14.5 4v4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlip);
export default ForwardRef;
