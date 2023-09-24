import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemoveFromCart = (
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
        d="M3 6h19l-3 10H6L3 6Zm0 0-.75-2.5M9.992 11h4M11 19.5a1.5 1.5 0 0 1-3 0M17 19.5a1.5 1.5 0 0 1-3 0"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRemoveFromCart);
export default ForwardRef;
