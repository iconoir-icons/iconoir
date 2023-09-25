import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSwipeTwoFingersLeftGesture = (
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
        d="M12 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Zm0 0H5m0 0L7.4 15M5 17.5 7.4 20M12 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Zm0 0H5m0 0L7.4 4M5 6.5 7.4 9"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSwipeTwoFingersLeftGesture);
export default ForwardRef;
