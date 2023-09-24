import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPasteClipboard = (
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
      d="M8.5 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 6.4V4.5a.5.5 0 0 1 .5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 0 1 .5.5v1.9a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPasteClipboard);
export default ForwardRef;
