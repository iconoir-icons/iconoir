import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEmojiSingRight = (
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
      d="M16 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmojiSingRight);
export default ForwardRef;
