import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFish = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.5 9s0-2-1-4c4 0 6.5 2.5 6.5 2.5s3.5-.5 6 4.5c-1 5.5-6 6-6 6l-4 2.5v-3c-2.5-1-5-3.5-5-5S10.5 9 10.5 9Zm0 0s1-.5 2-.5M2 9.5l1 3-1 3s5 0 5-3-5-3-5-3ZM17 12.01l.01-.011"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFish);
export default ForwardRef;
