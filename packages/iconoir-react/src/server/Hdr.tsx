import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHdr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1.5 8.5V12m0 3.5V12m0 0H6m0 0V8.5M6 12v3.5M17.5 15.5v-2.8m2.857 0c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H17.5v4.2m2.857 0H17.5m2.857 0 2.143 2.8M9.5 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5V12Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHdr);
export default ForwardRef;
