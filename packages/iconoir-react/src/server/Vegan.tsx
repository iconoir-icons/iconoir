import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVegan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 11.063C12.53 13.65 10.059 20 10.059 20S6.529 11.062 3 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20.496 5.577.426 4.424c.276 2.87-1.875 5.425-4.745 5.702-2.816.27-5.367-1.788-5.638-4.604a5.122 5.122 0 0 1 4.608-5.59l4.716-.454a.58.58 0 0 1 .633.522Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVegan);
export default ForwardRef;
