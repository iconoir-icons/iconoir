import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 21h18M12.222 5.828 15.05 3 20 7.95l-2.828 2.828m-4.95-4.95-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95 4.95 4.95"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
