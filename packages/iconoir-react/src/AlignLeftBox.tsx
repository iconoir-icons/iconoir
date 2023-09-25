import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAlignLeftBox = (
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
        d="m16.004 3.995-.011.01M20.004 3.995l-.011.01M20.004 7.995l-.011.01M20.004 11.995l-.011.01M20.004 15.995l-.011.01M20.004 19.995l-.011.01M16.004 19.995l-.011.01M12.006 3.995h-8v16h8v-16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlignLeftBox);
export default ForwardRef;
