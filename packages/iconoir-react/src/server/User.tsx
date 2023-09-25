import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
