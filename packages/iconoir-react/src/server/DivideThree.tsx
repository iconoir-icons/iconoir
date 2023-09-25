import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDivideThree = (
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
      d="M12 21v-4a5 5 0 0 0-5-5H3M12 21v-4a5 5 0 0 1 5-5h4M12 2v20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 8-4 4 4 4M16 6l-4-4-4 4M18 8l4 4-4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDivideThree);
export default ForwardRef;
