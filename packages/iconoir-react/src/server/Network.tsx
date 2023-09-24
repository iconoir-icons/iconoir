import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNetwork = (
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
    <rect width={7} height={5} x={3} y={2} stroke="currentColor" rx={0.6} />
    <rect width={7} height={5} x={8.5} y={17} stroke="currentColor" rx={0.6} />
    <rect width={7} height={5} x={14} y={2} stroke="currentColor" rx={0.6} />
    <path
      stroke="currentColor"
      d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNetwork);
export default ForwardRef;
