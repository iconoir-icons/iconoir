import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgScissorAlt = (
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
        d="M10.236 8a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4Zm0 0L20 16M10.236 16a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4Zm0 0L20 8"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgScissorAlt);
export default ForwardRef;
