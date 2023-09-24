import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCollapse = (
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
        d="m20 20-5-5m0 0v4m0-4h4M4 20l5-5m0 0v4m0-4H5M20 4l-5 5m0 0V5m0 4h4M4 4l5 5m0 0V5m0 4H5"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCollapse);
export default ForwardRef;
