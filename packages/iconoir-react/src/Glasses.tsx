import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGlasses = (
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
        d="M2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm0 0V6M22 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0V6M14 14h-4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
