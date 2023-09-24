import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGreenBus = (
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
      d="m7 16.01.01-.011M21 12H3v7a1 1 0 0 0 1 1h9M17 23s.9-3.118 3-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.802 21.424-.134.013a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.497ZM21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 8h10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGreenBus);
export default ForwardRef;
