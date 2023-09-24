import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNumberedListLeft = (
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
      d="M9 5h12M5 7V3L3.5 4.5M5.5 14h-2l1.905-2.963a.428.428 0 0 0 .072-.323C5.42 10.456 5.216 10 4.5 10c-1 0-1 .889-1 .889s0 0 0 0v.222M4 19h.5a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1M3.5 17h2L4 19M9 12h12M9 19h12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberedListLeft);
export default ForwardRef;
