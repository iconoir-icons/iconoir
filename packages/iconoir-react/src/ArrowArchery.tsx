import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgArrowArchery = (
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
        d="m8.611 15.89 12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828v-2.829Zm12.02-12.02h-2.828m2.829 0v2.828"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgArrowArchery);
export default ForwardRef;
