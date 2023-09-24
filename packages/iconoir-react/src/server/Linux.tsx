import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLinux = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.5 20c1 0 2-.8 2-2v-7c0-3.5 3.1-7 7.5-7M21.5 20c-1 0-2-.8-2-2v-7c0-3.5-3.1-7-7.5-7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19c2.761 0 5-1.12 5-2.5S14.761 14 12 14s-5 1.12-5 2.5S9.239 19 12 19Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.75 15c-.463-.635-.75-1.52-.75-2.5C7 10.567 8.12 9 9.5 9s2.5 1.567 2.5 3.5c0 .455-.062.89-.175 1.29M16.25 15c.463-.635.75-1.52.75-2.5 0-1.933-1.12-3.5-2.5-3.5S12 10.567 12 12.5c0 .455.062.89.175 1.29M9.5 12v2M14.5 12v2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLinux);
export default ForwardRef;
