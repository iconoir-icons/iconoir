import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSwipeTwoFingersUpGesture = (
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
        d="M6.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 0V5m0 0L9 7.4M6.5 5 4 7.4M17.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 0V5m0 0L20 7.4M17.5 5 15 7.4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSwipeTwoFingersUpGesture);
export default ForwardRef;
