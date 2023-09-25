import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCloudSunny = (
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
      d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 9h1M12 2V1M18.5 3.5l-1 1M5.5 3.5l1 1M4 9h1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudSunny);
export default ForwardRef;
