import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGreenTruck = (
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
      strokeMiterlimit={1.5}
      d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M14 15V4.6a.6.6 0 0 0-.6-.6H2.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.05M14 15H9.05M14 7h5.61a.6.6 0 0 1 .548.356l1.29 2.903a.6.6 0 0 1 .052.243V12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 23s.9-3.118 3-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.802 21.424-.134.013a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.497Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGreenTruck);
export default ForwardRef;
