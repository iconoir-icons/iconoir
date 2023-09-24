import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMedium = (
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
        d="M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM15 16c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4ZM20 16c.552 0 1-1.79 1-4s-.448-4-1-4-1 1.79-1 4 .448 4 1 4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedium);
export default ForwardRef;
