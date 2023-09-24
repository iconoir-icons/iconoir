import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTemperatureLow = (
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
      d="M6 12a5 5 0 1 0 6 0M6 12V3h6v9M12 3h2M12 6h2M12 9h2M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0v-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTemperatureLow);
export default ForwardRef;
