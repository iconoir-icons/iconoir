import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUserCart = (
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
        d="m22 12.5-.833 2.5m0 0L20 18.5h-4.5l-1-3.5h6.667ZM16.5 20.51l.01-.011M19.5 20.51l.01-.011M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 18a7 7 0 0 1 11.33-5.5"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUserCart);
export default ForwardRef;
