import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoreVert = (
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
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreVert);
export default ForwardRef;
