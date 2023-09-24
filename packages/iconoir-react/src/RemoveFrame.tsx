import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemoveFrame = (
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
        strokeMiterlimit={1.5}
        d="M4.998 2H2v2.998h2.998V2ZM4.999 3.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998V19ZM21.997 2.001H19v2.998h2.998V2.001ZM21.997 19.001H19v2.998h2.998v-2.998Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRemoveFrame);
export default ForwardRef;
