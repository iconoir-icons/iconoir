import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCut = (
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
        d="M17 12h1M22 12h1M6.236 7a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4Zm0 0L19 18M6.236 17a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4Zm0 0L19 6"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCut);
export default ForwardRef;
