import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVoiceScan = (
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
      d="M12 6v12M9 9v6M18 11v2M6 11v2M15 7v10M6 3H3v3M18 3h3v3M6 21H3v-3M18 21h3v-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVoiceScan);
export default ForwardRef;
