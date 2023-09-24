import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPatchHoles3D = (
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
      d="m12 22-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524V11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 12v5.5M12 2v7M18.657 17.243l.707.707M17.243 18.657l.707.707M18.657 14.414l-4.243 4.243a2 2 0 0 0 0 2.828l.707.708a2 2 0 0 0 2.829 0l4.242-4.243a2 2 0 0 0 0-2.829l-.707-.707a2 2 0 0 0-2.828 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPatchHoles3D);
export default ForwardRef;
