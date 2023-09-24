import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIntersectAlt = (
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
      d="m15.01 3-.01.011M11.01 3l-.01.011M7.01 3 7 3.011M3.01 3 3 3.011M3.01 7 3 7.011M3.01 11l-.01.011M3.01 15l-.01.011M9 21.01l.01-.011M13 21.01l.01-.011M17 21.01l.01-.011M21 21.01l.01-.011M21 17.01l.01-.011M21 13.01l.01-.011M21 9.01l.01-.011M9 17v-7a1 1 0 0 1 1-1h7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 7v7a1 1 0 0 1-1 1H7"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIntersectAlt);
export default ForwardRef;
