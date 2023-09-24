import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgArcheryMatch = (
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
        d="m8.611 15.89 12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828v-2.829Zm12.02-12.02h-2.828m2.829 0v2.828M15.39 15.89 3.367 3.867M15.39 15.89h2.829l2.828 2.829h-2.828v2.828l-2.829-2.828v-2.829ZM3.37 3.87h2.828m-2.829 0v2.828"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgArcheryMatch);
export default ForwardRef;
