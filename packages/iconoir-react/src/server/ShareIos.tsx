import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShareIos = (
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
      d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6M12 15V3m0 0L8.5 6.5M12 3l3.5 3.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShareIos);
export default ForwardRef;
