import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFillet3D = (
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
        d="M2 20v-4C2 8.268 8.268 2 16 2h4M20.839 20.84h-3.536m3.536 0v-3.537m0 3.536L18 18"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 9 7 7"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFillet3D);
export default ForwardRef;
