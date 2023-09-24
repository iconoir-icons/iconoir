import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCompressLines = (
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
      d="M18 2H6M18 22H6M12 5v5m0 0 3-3m-3 3L9 7M12 19v-5m0 0 3 3m-3-3-3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCompressLines);
export default ForwardRef;
