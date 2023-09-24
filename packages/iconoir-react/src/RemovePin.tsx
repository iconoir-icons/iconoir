import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemovePin = (
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
        d="M9.5 14.5 3 21M7.676 7.89l-.979-.102L5 9.485l9.193 9.193 1.697-1.697-.102-.981m-4.303-9 3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRemovePin);
export default ForwardRef;
