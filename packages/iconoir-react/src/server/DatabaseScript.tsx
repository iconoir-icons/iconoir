import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDatabaseScript = (
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
      d="M22 14V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDatabaseScript);
export default ForwardRef;
