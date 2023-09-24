import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDb = (
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
      <path stroke="currentColor" d="M5 12v6s0 3 7 3 7-3 7-3v-6" />
      <path stroke="currentColor" d="M5 6v6s0 3 7 3 7-3 7-3V6" />
      <path
        stroke="currentColor"
        d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDb);
export default ForwardRef;
