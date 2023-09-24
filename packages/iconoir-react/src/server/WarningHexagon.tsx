import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWarningHexagon = (
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
      d="M1.173 12.3a.6.6 0 0 1 0-.6l5.154-8.926a.6.6 0 0 1 .52-.3h10.307a.6.6 0 0 1 .52.3l5.153 8.926a.6.6 0 0 1 0 .6l-5.154 8.926a.6.6 0 0 1-.52.3H6.847a.6.6 0 0 1-.52-.3L1.174 12.3ZM12 8v4M12 16.01l.01-.011"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningHexagon);
export default ForwardRef;
