import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVerticalMerge = (
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
      d="M12 2v8m0 0 3.5-3.5M12 10 8.5 6.5M12 22v-8m0 0 3.5 3.5M12 14l-3.5 3.5M3 14h18M3 10h18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalMerge);
export default ForwardRef;
