import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChurchAlt = (
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
      d="M7.576 7.424a.6.6 0 0 1 .848 0l3.4 3.4a.6.6 0 0 1 .176.425V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V11.249a.6.6 0 0 1 .176-.425l3.4-3.4ZM8 7V4m0-2v2m0 0H6m2 0h2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22h7.4a.6.6 0 0 0 .6-.6V10.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 7H8M8 22v-5M8 13.01l.01-.011"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgChurchAlt);
export default ForwardRef;
