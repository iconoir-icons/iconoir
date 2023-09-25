import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPizzaSlice = (
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
      d="m14 9.01.01-.011M8 8.01l.01-.011M8 14.01l.01-.011"
    />
    <path
      stroke="currentColor"
      d="M6 19 2.236 3.004a.6.6 0 0 1 .754-.713L19 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M22.198 8.425a1.75 1.75 0 0 0-3.396-.85c-.391 1.568-1.9 4.05-4.227 6.375-2.3 2.301-5.148 4.194-7.968 4.845a1.75 1.75 0 1 0 .787 3.41c3.68-.849 7.082-3.206 9.656-5.78 2.549-2.549 4.54-5.568 5.148-8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPizzaSlice);
export default ForwardRef;
