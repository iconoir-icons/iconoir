import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVerifiedUser = (
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
      d="M2 20v-1a7 7 0 0 1 7-7v0"
    />
    <path
      stroke="currentColor"
      d="M15.804 12.313a1.618 1.618 0 0 1 2.392 0c.325.357.79.55 1.272.527a1.618 1.618 0 0 1 1.692 1.692c-.023.481.17.947.526 1.272.705.642.705 1.75 0 2.392-.356.325-.549.79-.526 1.272a1.618 1.618 0 0 1-1.692 1.692 1.618 1.618 0 0 0-1.272.526 1.618 1.618 0 0 1-2.392 0 1.618 1.618 0 0 0-1.272-.526 1.618 1.618 0 0 1-1.692-1.692 1.618 1.618 0 0 0-.527-1.272 1.618 1.618 0 0 1 0-2.392c.357-.325.55-.79.527-1.272a1.618 1.618 0 0 1 1.692-1.692c.481.023.947-.17 1.272-.527Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.364 17 1.09 1.09 2.182-2.18M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVerifiedUser);
export default ForwardRef;
