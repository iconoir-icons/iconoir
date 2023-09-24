import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      d="M12 4c-6 0-6 4-6 6-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5c0-2 0-6-6-6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
