import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMapsTurnRight = (
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
        d="m4.365 19.787 7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.498.498 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865ZM19 6.5h-3s0 0 0 0-4 0-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 9 19 6.5 15.5 4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMapsTurnRight);
export default ForwardRef;
