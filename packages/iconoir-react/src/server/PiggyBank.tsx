import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPiggyBank = (
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
      d="M14.5 8.5c-.78-.202-1.866-.5-2.735-.5C7.476 8 4 10.668 4 13.958c0 1.891 1.148 3.577 2.938 4.668l-.485 1.6a.6.6 0 0 0 .574.774h1.764a.6.6 0 0 0 .36-.12l1.395-1.047h2.437l1.395 1.047a.6.6 0 0 0 .36.12h1.764a.6.6 0 0 0 .574-.774l-.485-1.6c1.067-.65 1.905-1.511 2.409-2.501M14.5 8.5 19 7l-.084 3.628L21 11.5V15l-1.926 1"
    />
    <path
      fill="#000"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 10s0 2.4 2 3"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M12.8 7.753c.13-.372.2-.772.2-1.188C13 4.596 11.433 3 9.5 3S6 4.596 6 6.565c0 .941.358 1.798.944 2.435"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPiggyBank);
export default ForwardRef;
