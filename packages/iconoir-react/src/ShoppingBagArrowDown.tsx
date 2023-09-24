import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShoppingBagArrowDown = (
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
        d="M16.5 21h2.169a2 2 0 0 0 1.976-2.304l-1.384-9A2 2 0 0 0 17.284 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H7.5M12 12v7m0 0 3-3m-3 3-3-3M14 5a2 2 0 1 0-4 0"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgShoppingBagArrowDown);
export default ForwardRef;
