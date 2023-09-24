import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAngleTool = (
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
      d="M3 21V3h6v12h12v6H3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M13 19v2M9 19v2M3 7h2M3 11h2M3 15h2M17 19v2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAngleTool);
export default ForwardRef;
