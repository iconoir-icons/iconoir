import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWristwatch = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
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
        d="M16 16.472V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.528M8 7.528V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.528"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 12h-2v-2"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWristwatch);
export default ForwardRef;
