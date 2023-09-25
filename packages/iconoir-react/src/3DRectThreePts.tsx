import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const Svg3DRectThreePts = (
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
      <path stroke="currentColor" d="M3 21V3.6a.6.6 0 0 1 .6-.6H21" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 21h3.4a.6.6 0 0 0 .6-.6V17M21 7v2M21 12v2M7 21h2M12 21h2"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg3DRectThreePts);
export default ForwardRef;
