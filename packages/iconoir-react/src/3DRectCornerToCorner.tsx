import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const Svg3DRectCornerToCorner = (
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
        d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg3DRectCornerToCorner);
export default ForwardRef;
