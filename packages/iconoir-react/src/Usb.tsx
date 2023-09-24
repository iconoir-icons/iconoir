import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUsb = (
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
        d="M12.5 2v15M12.5 14l5.5-2V8.5M12.5 16 7 14.5v-3M12.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16.5 5.5v3h3v-3h-3ZM10.5 4l2-2 2 2M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
