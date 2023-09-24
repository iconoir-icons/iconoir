import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTextBox = (
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
        d="M12 8v8m0-8H8m4 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M21 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.5m18-3V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5.5M19.5 13.5v-3h3v3h-3ZM1.5 13.5v-3h3v3h-3Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTextBox);
export default ForwardRef;
