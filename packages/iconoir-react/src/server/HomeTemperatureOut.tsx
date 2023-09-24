import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHomeTemperatureOut = (
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
      d="M14 8 4.311 3.156a.6.6 0 0 0-.6.037L2.5 4M12 11v8a2 2 0 0 1-2 2H7m0 0H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6V21ZM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 7.5V14M19 12h2M19 9h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeTemperatureOut);
export default ForwardRef;
