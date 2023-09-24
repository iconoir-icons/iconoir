import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAreaSearch = (
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
      d="M20.124 20.119a3 3 0 1 0-4.248-4.237 3 3 0 0 0 4.248 4.237Zm0 0L22 22M7 2H4v3M4 11v2M11 2h2M11 22h2M20 11v2M17 2h3v3M7 22H4v-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAreaSearch);
export default ForwardRef;
