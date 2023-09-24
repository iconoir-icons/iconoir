import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgContactless = (
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
        d="M15 21.5c4-5.5 4-13.5 0-19M11.5 20c3.5-5 3.5-11 0-16M8.5 18c2.667-3.75 2.667-8.25 0-12M5.5 16c1.5-2.5 1.5-5.5 0-8"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContactless);
export default ForwardRef;
