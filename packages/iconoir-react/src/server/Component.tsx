import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgComponent = (
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
      d="m5.212 15.111-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0ZM11.576 21.475l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0ZM11.576 8.748 8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0ZM17.94 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;
