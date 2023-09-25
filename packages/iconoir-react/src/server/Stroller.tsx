import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgStroller = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#stroller_svg__a)"
    >
      <path d="M11.5 3a8.5 8.5 0 0 0-7.212 13M18.712 16A8.46 8.46 0 0 0 20 11.5v-2h2.5M8 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM15 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM11.5 3v9M3.5 12h16" />
    </g>
    <defs>
      <clipPath id="stroller_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgStroller);
export default ForwardRef;
