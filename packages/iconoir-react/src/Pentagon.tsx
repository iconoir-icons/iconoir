import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPentagon = (
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
        d="M11.647 2.256a.6.6 0 0 1 .706 0l9.756 7.089a.6.6 0 0 1 .218.67L18.6 21.485a.6.6 0 0 1-.57.414H5.97a.6.6 0 0 1-.57-.414l-3.727-11.47a.6.6 0 0 1 .218-.67l9.756-7.089Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPentagon);
export default ForwardRef;
