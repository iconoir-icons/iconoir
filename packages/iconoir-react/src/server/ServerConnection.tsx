import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgServerConnection = (
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
      d="M3 19h9m9 0h-9m0 0v-6m0 0h6V5H6v8h6ZM9 9.01l.01-.011M12 9.01l.01-.011"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgServerConnection);
export default ForwardRef;
