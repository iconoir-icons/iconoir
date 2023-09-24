import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEvPlugError = (
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
        d="M10 13.154V21M15 8.385v2.769a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2ZM13.333 6.385V3M6.667 6.385V3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.121 21.364 2.122-2.121m0 0 2.121-2.122m-2.121 2.122L15.12 17.12m2.122 2.122 2.121 2.121"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEvPlugError);
export default ForwardRef;
