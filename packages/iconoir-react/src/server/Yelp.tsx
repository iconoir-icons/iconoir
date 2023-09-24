import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgYelp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m11.5 11-.458-8.24a.6.6 0 0 0-.771-.541L6.814 3.256a.6.6 0 0 0-.311.93L11.5 11ZM14 12.5l4.57-.83a.6.6 0 0 0 .38-.94l-1.445-2.023a.6.6 0 0 0-.987.016L14 12.5ZM14.5 16l2.066 4.132a.6.6 0 0 0 1.017.091l1.835-2.446a.6.6 0 0 0-.373-.95L14.5 16ZM11.5 16.5l-3.341 3.341a.6.6 0 0 0 .213.986l2.317.869a.6.6 0 0 0 .811-.562V16.5ZM9.5 14l-4.132-2.066a.6.6 0 0 0-.868.537v2.643a.6.6 0 0 0 .823.557L9.5 14Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgYelp);
export default ForwardRef;
