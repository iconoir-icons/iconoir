import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFemale = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v4m0 2v-2m0 0h-2m2 0h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFemale);
export default ForwardRef;
